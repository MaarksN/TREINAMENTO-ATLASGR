import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuizModule } from './quiz/quiz.module';
import { GamificationModule } from './gamification/gamification.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [QuizModule, GamificationModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
