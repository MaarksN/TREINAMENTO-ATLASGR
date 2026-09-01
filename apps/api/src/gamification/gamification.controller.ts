import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { GamificationService } from './gamification.service';

@Controller('gamification')
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  @Get(':userId/profile')
  getProfile(@Param('userId') userId: string) {
    return this.gamificationService.getProfile(userId);
  }

  @Post(':userId/quiz')
  async completeQuiz(
    @Param('userId') userId: string, 
    @Body() body: { moduleId: string, score: number }
  ) {
    return this.gamificationService.completeQuiz(userId, body.moduleId, body.score);
  }

  @Post(':userId/session')
  async registerSession(@Param('userId') userId: string) {
    return this.gamificationService.registerSession(userId);
  }
}

