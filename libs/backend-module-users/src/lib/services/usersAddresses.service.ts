import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from '../dto/create-user-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAddress } from '../entities/userAddress.entity';
import { UpdateUserAddressDto } from '../dto/update-user-address.dto';

@Injectable()
export class UsersAddressesService {
  constructor(
    @InjectRepository(UserAddress)
    private usersAddressesRepository: Repository<UserAddress>
  ) {}

  create(createUserAddressDto: CreateUserAddressDto) {
    return this.usersAddressesRepository.create(createUserAddressDto);
  }

  findAll(): Promise<UserAddress[]> {
    return this.usersAddressesRepository.find();
  }

  findOne(id: number): Promise<UserAddress> {
    return this.usersAddressesRepository.findOne(id);
  }

  update(id: number, updateUserAddressDto: UpdateUserAddressDto) {
    return this.usersAddressesRepository.update(id, updateUserAddressDto);
  }

  async remove(id: number): Promise<void> {
    await this.usersAddressesRepository.delete(id);
  }
}
