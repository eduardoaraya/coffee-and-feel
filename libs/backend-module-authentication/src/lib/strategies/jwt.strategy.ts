import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import CONSTANTS from '../constants';

@Injectable()
export class AuthenticationJWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: CONSTANTS.JWT_SECRET,
    });
  }

  public async validate(payload: Record<string, unknown>) {
    return { userId: payload.sub, username: payload.username };
  }
}
