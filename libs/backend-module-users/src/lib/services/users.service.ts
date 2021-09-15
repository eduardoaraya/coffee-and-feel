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

    return await this.usersRepository.saveUser({
      ...createUserDto,
      userPassword: hashedPassword,
    });
  }

  public async findAll(): Promise<User[]> {
    return await this.usersRepository.findAllUsers();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findUserById(id);
  }

  public async findByEmail(
    email: string,
    id: number | null = null
  ): Promise<User[]> {
    return await this.usersRepository.findUserByEmail(email, id);
  }

  public async findByCPF(
    cpf: string,
    id: number | null = null
  ): Promise<User[]> {
    return await this.usersRepository.findUserByCPF(cpf, id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
