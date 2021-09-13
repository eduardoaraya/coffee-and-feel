import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UpdateResult } from 'typeorm';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  public async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashPassword(createUserDto.userPassword);

    return this.usersRepository.save({
      ...createUserDto,
      userPassword: hashedPassword,
    });
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

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
