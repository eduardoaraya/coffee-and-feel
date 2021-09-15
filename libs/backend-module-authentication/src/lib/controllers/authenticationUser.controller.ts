import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { LocalAuthGuard } from '../guards/localAuth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthenticationUserController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() request: Request) {
    return request.user;
  }
}
