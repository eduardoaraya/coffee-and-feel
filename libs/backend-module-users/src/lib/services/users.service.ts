import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UpdateResult } from 'typeorm';
import { UserRepository } from '../repositories/user.repository';

// const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.createUser(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
