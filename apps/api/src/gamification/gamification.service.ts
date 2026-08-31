import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@atlasgr/database';

@Injectable()
export class GamificationService {
  private readonly logger = new Logger(GamificationService.name);
  private prisma = new PrismaClient();

  async getProfile(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { gamificationProfile: true }
      });
      if (user && user.gamificationProfile) {
          return user.gamificationProfile;
      }
    } catch (e) {
      this.logger.warn('Database error', e);
    }
    return { userId, xp: 0, level: 1, currentStreak: 0, longestStreak: 0, lastActiveDate: new Date(), avatarUrl: null };
  }

  async completeQuiz(userId: string, moduleId: string, score: number) {
    // Basic gamification logic for server
    const passed = score >= 70;
    const xpEarned = passed ? 100 : 10;
    
    // Ensure User and Profile exists
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
      update: { score: Math.max(score), completedAt: passed ? new Date() : null, status: passed ? 'COMPLETED' : 'IN_PROGRESS' },
      create: { userId, moduleId, score, status: passed ? 'COMPLETED' : 'IN_PROGRESS', completedAt: passed ? new Date() : null }
    });

    // Update XP
    const profile = await this.prisma.gamificationProfile.update({
      where: { userId },
      data: { xp: { increment: xpEarned } }
    });

    return { progress, profile, xpEarned, passed };
  }
}

