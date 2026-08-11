import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@atlasgr/database';

@Injectable()
export class GamificationService {
  private prisma = new PrismaClient();

  async getProfile(userId: string) {
    try {
      // Intentionally checking if we have the connection working
      // Using mock for the moment but with actual try/catch block
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { gamificationProfile: true }
      });

      if (user && user.gamificationProfile) {
          return user.gamificationProfile;
      }
    } catch (e) {
      console.log('Database not yet populated or connected, returning mock');
    }

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
