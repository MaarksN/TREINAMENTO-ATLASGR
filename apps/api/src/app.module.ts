import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GamificationModule } from './gamification/gamification.module';

@Module({
  imports: [GamificationModule],
  controllers: [AppController],
})
export class AppModule {}
