import { UserEntityModel, UserGender } from '../entities/user.entity';

import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsEnum,
  IsEmail,
  IsUrl,
  IsPhoneNumber,
  IsDate,
} from 'class-validator';

export class CreateUserDto
  implements Omit<UserEntityModel, 'id' | 'createdAt' | 'updatedAt'>
{
  @ApiProperty()
  @IsString()
  userFirstName: string;

  @ApiProperty()
  @IsString()
  userLastName: string;

  @ApiProperty()
  @IsDate()
  userBirthday: Date;

  @ApiProperty()
  @IsEmail()
  userEmail: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  userEmailVerified: boolean;

  @ApiProperty({ nullable: true })
  @IsUrl()
  userFacebook?: string;

  @ApiProperty({ enum: UserGender, default: UserGender.NOT_DECLARED })
  @IsEnum(UserGender)
  userGender: UserGender;

  @ApiProperty({ nullable: true })
  @IsUrl()
  userInstagram?: string;

  @ApiProperty({ nullable: true })
  @IsUrl()
  userLinkedin?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  userPassHash?: string;

  @ApiProperty({ nullable: true })
  @IsPhoneNumber('BR')
  userPhone?: string;

  @ApiProperty({ nullable: true })
  @IsPhoneNumber('BR')
  userPhoneAlt?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  userSalt?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  userFacebookId?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  userGoogleId?: string;
}
