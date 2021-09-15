import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUserService } from '../services/authenticationUser';

@Injectable()
export class AuthenticationLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authUserService: AuthUserService) {
    super();
  }

  async validate(email: string, password: string) {
    const user = await this.authUserService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
