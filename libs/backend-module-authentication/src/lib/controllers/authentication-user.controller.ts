import { User } from '@atlascode/coffee-backend-module-users';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JTWAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthUserService } from '../services/authentication-user.service';

@ApiTags('auth')
@Controller('auth')
export class AuthenticationUserController {
  constructor(private readonly authenticationUserService: AuthUserService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() request: Request) {
    return await this.authenticationUserService.login(request.user as User);
  }

  @UseGuards(JTWAuthGuard)
  @Get('profile')
  public async getProfile(@Req() request: Request) {
    return request.user;
  }
}
