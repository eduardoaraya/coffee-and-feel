import {
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';

import { UsersAddressesService } from '../services/usersAddresses.service';
import { UpdateUserAddressDto } from '../dto/update-user-address.dto';
import { CreateUserAddressDto } from '../dto/create-user-address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users/address')
@Controller('users/address')
export class UsersAddressesController {
  constructor(private readonly usersAddressesService: UsersAddressesService) {}

  @Post()
  create(@Body() createUserAddress: CreateUserAddressDto) {
    return this.usersAddressesService.create(createUserAddress);
  }

  @Get()
  findAll() {
    return this.usersAddressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersAddressesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserAddressDto: UpdateUserAddressDto
  ) {
    this.usersAddressesService.update(id, updateUserAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersAddressesService.remove(id);
  }
}
