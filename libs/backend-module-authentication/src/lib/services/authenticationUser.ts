import { UsersService } from '@atlascode/coffee-backend-module-users';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PasswordUtility } from '@atlascode/coffee-backend-module-common';

@Injectable()
export class AuthUserService {
  constructor(
    private usersService: UsersService,
    private authenticationPassword: PasswordUtility
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)[0];

    let passwordCheck: boolean;

    if (user) {
      passwordCheck = await this.authenticationPassword.comparePassword(
        password,
        user.userPassword
      );
    } else {
      throw new NotFoundException();
    }

    if (passwordCheck) {
      return true;
    } else {
      return false;
    }
  }
}
