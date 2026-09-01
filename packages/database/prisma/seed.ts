/**
 * Seed inicial: cria o usuário Administrador padrão.
 * 
 * Executar com: npx ts-node seed.ts
 * (ou: node --loader ts-node/esm seed.ts)
 * 
 * Email:  admin@atlasgr.com.br
 * Senha:  Atlas@Admin123
 */
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('Atlas@Admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@atlasgr.com.br' },
    update: {},
    create: {
      email: 'admin@atlasgr.com.br',
      password: hashedPassword,
      name: 'Administrador ATLASGR',
      role: 'ADMIN',
      cargo: 'Administrador',
      departamento: 'TI',
      gamificationProfile: {
        create: { xp: 0 }
      }
    }
  });

  console.log(`✅ Admin criado/verificado: ${admin.email}`);
  console.log('   Senha padrão: Atlas@Admin123');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
