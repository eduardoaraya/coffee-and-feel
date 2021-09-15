import { Module } from '@nestjs/common';
import { UsersModule } from '@atlascode/coffee-backend-module-users';
import { AuthUserService } from './services/authentication-user.service';
import { AuthenticationLocalStrategy } from './strategies/local.strategy';
import { AuthenticationUserController } from './controllers/authentication-user.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import CONSTANTS from './constants/';
import { AuthenticationJWTStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: CONSTANTS.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthenticationUserController],
  providers: [
    AuthUserService,
    AuthenticationLocalStrategy,
    AuthenticationJWTStrategy,
  ],
  exports: [AuthUserService],
})
export class AuthenticationModule {}
