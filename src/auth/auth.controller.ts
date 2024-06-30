import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { LoginDto } from './login.dto'
import { ApiBody } from '@nestjs/swagger'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({ type: LoginDto, description: 'Login' })
  async signIn(@Body() login: LoginDto): Promise<Object> {
    return await this.authService.signIn(login.username, login.password)
  }


  // @UseGuards(AuthGuard)
  // @Get('profile')
  // getProfile(@Request() req: any) {
  //   return req.user;
  // }
  
}