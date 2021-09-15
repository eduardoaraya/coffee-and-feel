import { User, UsersService } from '@atlascode/coffee-backend-module-users';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PasswordUtility } from '@atlascode/coffee-backend-module-common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUserService {
  constructor(
    private usersService: UsersService,
    private authenticationPassword: PasswordUtility,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    let passwordCheck: boolean;

    if (user.length > 0) {
      passwordCheck = await this.authenticationPassword.comparePassword(
        password,
        user[0].userPassword
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { userPassword, ...rest } = user[0];

      return passwordCheck ? rest : null;
    } else {
      throw new NotFoundException();
    }
  }

  public async login(user: User) {
    const payload = { username: user.userEmail, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
