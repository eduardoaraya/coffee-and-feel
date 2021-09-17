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
  IsNotEmpty,
  Matches,
  IsOptional,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { IsEqualTo } from '../util/isEqualTo.decorator';
import { internet, date, phone } from 'faker';

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

  @ApiProperty({ default: date.past() })
  @IsDateString()
  userBirthday: Date;

  @ApiProperty({ default: internet.email() })
  @IsEmail()
  userEmail: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  userEmailVerified: boolean;

  @ApiProperty({ nullable: true, default: internet.url() })
  @IsUrl()
  userFacebook?: string;

  @ApiProperty({ enum: UserGender, default: UserGender.NOT_DECLARED })
  @IsEnum(UserGender)
  userGender: UserGender;

  @ApiProperty({ nullable: true, default: '010.938.680-90' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
  @IsNotEmpty()
  userCPF?: string;

  @ApiProperty({
    nullable: true,
    default: internet.url(),
  })
  @IsUrl()
  userInstagram?: string;

  @ApiProperty({ nullable: true, default: internet.url() })
  @IsUrl()
  userLinkedin?: string;

  @ApiProperty({ nullable: true, default: 'password123' })
  @IsString()
  userPassword?: string;

  @ApiProperty({ nullable: true, default: 'password123' })
  @IsString()
  @IsEqualTo('userPassword')
  userPasswordConfirmation?: string;

  @ApiProperty({
    nullable: true,
    default: phone.phoneNumber('(##) 9-####-####'),
  })
  @IsPhoneNumber('BR')
  @IsOptional()
  userPhone?: string;

  @ApiProperty({
    nullable: true,
    default: phone.phoneNumber('(##) 9-####-####'),
  })
  @IsOptional()
  @IsPhoneNumber('BR')
  userPhoneAlt?: string;

  @ApiProperty({ nullable: true, default: null })
  @IsOptional()
  @IsString()
  userFacebookId?: string;

  @ApiProperty({ nullable: true, default: null })
  @IsOptional()
  @IsString()
  userGoogleId?: string;
}
