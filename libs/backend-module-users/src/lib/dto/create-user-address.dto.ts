import { UserAddressEntityModel } from '../entities/userAddress.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateUserAddressDto
  implements Omit<UserAddressEntityModel, 'id'>
{
  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  addressLineOne: string;

  @ApiProperty()
  @IsString()
  addressLineTwo: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  zipcode: string;

  @ApiProperty()
  @IsNumber()
  userId: number;

  //   Nullable fields
  @ApiProperty({ required: false })
  @IsString()
  addressReference?: string;
}
