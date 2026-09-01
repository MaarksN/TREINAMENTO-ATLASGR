import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('final-exam')
  getFinalExam() {
    return this.quizService.getFinalExam();
  }

  @Get(':moduleId')
  getModuleQuestions(@Param('moduleId') moduleId: string) {
    return this.quizService.getQuestionsForModule(moduleId);
  }

  @Post('final-exam/submit')
  submitFinalExam(
    @Body() body: { userId: string; answers: { questionId: string; selectedOption: number }[] }
  ) {
    return this.quizService.submitFinalExam(body.userId, body.answers);
  }

  @Post(':moduleId/submit')
  submitQuiz(
    @Param('moduleId') moduleId: string,
    @Body() body: { userId: string; answers: { questionId: string; selectedOption: number }[] }
  ) {
    return this.quizService.submitQuiz(body.userId, moduleId, body.answers);
  }
}
