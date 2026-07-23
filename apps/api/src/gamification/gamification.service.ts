import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@atlasgr/database';

@Injectable()
export class GamificationService {
  private prisma = new PrismaClient();

  async getProfile(userId: string) {
    // Return mock data temporarily until real DB setup
    return {
      userId,
      xp: 1250,
      level: 4,
      currentStreak: 5,
      longestStreak: 12,
      lastActiveDate: new Date(),
      avatarUrl: null
    };
  }
}
