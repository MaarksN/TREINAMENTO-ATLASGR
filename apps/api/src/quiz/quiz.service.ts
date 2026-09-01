import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@atlasgr/database';
import { quizzesByModule, buildFinalExam, getAllBuiltQuestions } from './data';
import { QuizQuestion, QuizQuestionClient } from '../../../portal/lib/types';

@Injectable()
export class QuizService {
  private prisma = new PrismaClient();

  getFinalExam(): QuizQuestionClient[] {
    const questions = buildFinalExam(2);
    return questions.map(q => ({
      id: q.id,
      moduleSlug: q.moduleSlug,
      question: q.question,
      options: q.options,
    }));
  }

  async submitFinalExam(userId: string, userAnswers: { questionId: string; selectedOption: number }[]) {
    const allQuestions = getAllBuiltQuestions();
    let correctCount = 0;
    const results = userAnswers.map(ans => {
      const q = allQuestions.find(question => question.id === ans.questionId);
      if (!q) return null;
      const isCorrect = q.correctIndex === ans.selectedOption;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        isCorrect,
        explanation: q.explanation,
        selectedOption: ans.selectedOption,
        correctIndex: q.correctIndex
      };
    }).filter(Boolean);

    const score = Math.round((correctCount / userAnswers.length) * 100);
    const passed = score >= 80;

    // Update Gamification for final exam
    const xpEarned = passed ? 500 : 50;
    const profile = await this.prisma.gamificationProfile.update({
      where: { userId },
      data: { xp: { increment: xpEarned } }
    });

    return { score, correctCount, passed, total: userAnswers.length, xpEarned, results };
  }

  getQuestionsForModule(moduleId: string): QuizQuestionClient[] {
    const questions = quizzesByModule[moduleId];
    if (!questions) {
      throw new NotFoundException('Module questions not found');
    }
    
    // Strip answers
    return questions.map(q => ({
      id: q.id,
      moduleSlug: q.moduleSlug,
      question: q.question,
      options: q.options,
    }));
  }

  async submitQuiz(userId: string, moduleId: string, userAnswers: { questionId: string; selectedOption: number }[]) {
    const questions = quizzesByModule[moduleId];
    if (!questions) {
      throw new NotFoundException('Module questions not found');
    }

    let correctCount = 0;
    const results = userAnswers.map(ans => {
      const q = questions.find(question => question.id === ans.questionId);
      if (!q) return null;
      const isCorrect = q.correctIndex === ans.selectedOption;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        isCorrect,
        explanation: q.explanation,
        selectedOption: ans.selectedOption,
        correctIndex: q.correctIndex
      };
    }).filter(Boolean);

    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= 70;

    // Ensure User exists
    let user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          id: userId,
          email: `${userId}@atlasgr.com`,
          name: userId,
          gamificationProfile: {
            create: { xp: 0, level: 1 }
          }
        }
      });
    }

    // Upsert Module Progress
    const progress = await this.prisma.moduleProgress.upsert({
      where: { userId_moduleId: { userId, moduleId } },
      update: { 
        score: Math.max(score), 
        completedAt: passed ? new Date() : null, 
        status: passed ? 'COMPLETED' : 'IN_PROGRESS' 
      },
      create: { 
        userId, 
        moduleId, 
        score, 
        status: passed ? 'COMPLETED' : 'IN_PROGRESS', 
        completedAt: passed ? new Date() : null 
      }
    });

    // Save individual answers
    // Delete old answers for this module and user first if we want to just keep the latest,
    // or just let them accumulate. Since the relation is to moduleProgress, 
    // it's better to clear the old ones to avoid bloat, or we can just create them.
    await this.prisma.quizAnswer.deleteMany({
      where: { moduleProgressId: progress.id }
    });

    await this.prisma.quizAnswer.createMany({
      data: results.map(r => ({
        moduleProgressId: progress.id,
        questionId: r.questionId,
        selectedOption: r.selectedOption,
        isCorrect: r.isCorrect
      }))
    });

    // Update Gamification
    const xpEarned = passed ? 100 : 10;
    const profile = await this.prisma.gamificationProfile.update({
      where: { userId },
      data: { xp: { increment: xpEarned } }
    });

    return { score, correctCount, passed, total: questions.length, xpEarned, results };
  }
}
