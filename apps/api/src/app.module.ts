import { Module } from '@nestjs/common';
import { GamificationModule } from './gamification/gamification.module';

@Module({
  imports: [GamificationModule],
})
export class AppModule {}
