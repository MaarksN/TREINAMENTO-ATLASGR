const fs = require('fs');

let content = fs.readFileSync('apps/api/src/gamification/gamification.service.ts', 'utf8');

content = content.replace(
  "import { Injectable } from '@nestjs/common';",
  "import { Injectable, Logger } from '@nestjs/common';"
);

content = content.replace(
  "private prisma = new PrismaClient();",
  "private readonly logger = new Logger(GamificationService.name);\n  private prisma = new PrismaClient();"
);

fs.writeFileSync('apps/api/src/gamification/gamification.service.ts', content);
