import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'treinamento-atlasgr-api',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}
