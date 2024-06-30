import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username)
    const isMatch = await bcrypt.compare(pass, user!.password)
    if(!user) {
      throw new UnauthorizedException("Senha ou usuário inválidos")
    }

    if (!isMatch) {
      throw new UnauthorizedException("Senha ou usuário inválidos");
    }
    const payload = { sub: user?.id, username: user?.username }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}