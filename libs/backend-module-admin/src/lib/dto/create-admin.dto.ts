import { OmitType } from '@nestjs/mapped-types';
import { Admin, AdminRole } from '../entities/admin.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateAdminDto extends OmitType(Admin, [
  'id',
  'createdAt',
  'deletedAt',
  'updatedAt',
]) {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  adminEmail: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminFirstname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminLastname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminPassword: string;

  @ApiProperty({ enum: AdminRole, default: AdminRole.VIEWER })
  @IsEnum(AdminRole)
  adminRole: AdminRole;
}
