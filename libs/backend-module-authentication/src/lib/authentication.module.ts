import { Module } from '@nestjs/common';
import { UsersModule } from '@atlascode/coffee-backend-module-users';
import { AuthUserService } from './services/authenticationUser';
import { AuthenticationLocalStrategy } from './strategies/authenticationLocal.strategy';
import { AuthenticationUserController } from './controllers/authenticationUser.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthenticationUserController],
  providers: [AuthUserService, AuthenticationLocalStrategy],
  exports: [],
})
export class AuthenticationModule {}
