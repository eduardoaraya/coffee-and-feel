import { UserCard } from '../entities/userCard.entity';
import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserCardDto extends OmitType(UserCard, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  @ApiProperty()
  @IsDate()
  userCCExpiryDate: Date;

  @ApiProperty()
  @IsString()
  userCCFullname: string;

  @ApiProperty()
  @IsString()
  userCCProvider: string;

  @ApiProperty()
  @IsNumber()
  userCCLastFour: number;

  @ApiProperty()
  @IsString()
  userPaymentToken: string;

  @ApiProperty()
  @IsNumber()
  userId: number;
}
