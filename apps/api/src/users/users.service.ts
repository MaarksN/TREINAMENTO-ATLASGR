import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaClient, User } from '@atlasgr/database';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create(data: Partial<User>) {
    const existing = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new ConflictException('Email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(data.password || 'Atlas@123', 10);
    
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        cpf: data.cpf,
        cargo: data.cargo,
        departamento: data.departamento,
        gestor: data.gestor,
        telefone: data.telefone,
        empresa: data.empresa,
        cidade: data.cidade,
        estado: data.estado,
        gamificationProfile: {
          create: { xp: 0 }
        }
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        cargo: true,
        departamento: true,
      }
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        cargo: true,
        departamento: true,
        createdAt: true,
        gamificationProfile: true,
      }
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id }
    });
  }
}
