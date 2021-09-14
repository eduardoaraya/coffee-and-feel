import { UserNotification } from '../entities/userNotification.entity';
import { ApiProperty } from '@nestjs/swagger';
import { OmitType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserNotificationDto extends OmitType(UserNotification, [
  'id',
  'created_at',
  'readAt',
]) {
  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsNumber()
  userId: number;
}
