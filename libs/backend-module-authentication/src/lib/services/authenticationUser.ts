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
    const user = await this.usersService.findByEmail(email);

    console.log(user);

    let passwordCheck: boolean;

    if (user.length > 0) {
      passwordCheck = await this.authenticationPassword.comparePassword(
        password,
        user[0].userPassword
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
