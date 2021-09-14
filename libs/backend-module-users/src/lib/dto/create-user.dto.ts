import { UserGender } from '../entities/user.entity';
import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsEnum,
  IsEmail,
  IsUrl,
  IsPhoneNumber,
  IsDateString,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { IsEqualTo } from '../util/isEqualTo.decorator';

export class CreateUserDto extends OmitType(User, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  @ApiProperty()
  @IsString()
  userFirstName: string;

  @ApiProperty()
  @IsString()
  userLastName: string;

  @ApiProperty({ default: new Date(Date.now()).toJSON() })
  @IsDateString()
  userBirthday: Date;

  @ApiProperty({ default: 'user@email.com' })
  @IsEmail()
  userEmail: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  userEmailVerified: boolean;

  @ApiProperty({ nullable: true, default: 'https://facebook.com/randomHandle' })
  @IsUrl()
  userFacebook?: string;

  @ApiProperty({ enum: UserGender, default: UserGender.NOT_DECLARED })
  @IsEnum(UserGender)
  userGender: UserGender;

  @ApiProperty({
    nullable: true,
    default: 'https://instagram.com/randomHandle',
  })
  @IsUrl()
  userInstagram?: string;

  @ApiProperty({ nullable: true, default: 'https://linkedin.com/random' })
  @IsUrl()
  userLinkedin?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  userPassword?: string;

  @ApiProperty()
  @IsString()
  @IsEqualTo('userPassword')
  userPasswordConfirmation?: string;

  @ApiProperty({ nullable: true, default: '51998477733' })
  @IsPhoneNumber('BR')
  userPhone?: string;

  @ApiProperty({ nullable: true, default: '51998877339' })
  @IsPhoneNumber('BR')
  userPhoneAlt?: string;

  @ApiProperty({ nullable: true })
  @IsString()
  userFacebookId?: string;

  @ApiProperty({ nullable: true, default: null })
  @IsString()
  userGoogleId?: string;
}
