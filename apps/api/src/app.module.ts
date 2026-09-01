import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GamificationModule } from './gamification/gamification.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [GamificationModule, QuizModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
