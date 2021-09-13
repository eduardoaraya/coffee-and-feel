import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from '../dto/create-user-address.dto';
import { UserAddress } from '../entities/userAddress.entity';
import { UpdateUserAddressDto } from '../dto/update-user-address.dto';
import { UserAddressRepository } from '../repositories/userAddress.repository';

@Injectable()
export class UsersAddressesService {
  constructor(private usersAddressesRepository: UserAddressRepository) {}

  create(createUserAddressDto: CreateUserAddressDto) {
    return this.usersAddressesRepository.save(createUserAddressDto);
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
