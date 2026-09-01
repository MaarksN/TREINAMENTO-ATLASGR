import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const { password, ...result } = user;
    
    // Na fase 1, estamos retornando apenas os dados do usuário para o store.ts
    // Numa próxima etapa (Fase 3), usaremos @nestjs/jwt aqui
    return {
      user: result,
      token: 'fake-jwt-token-for-now-replace-later'
    };
  }
}
