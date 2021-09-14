import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserCardDto } from '../dto/create-user-card.dto';
import { UpdateUserCardDto } from '../dto/update-user-card.to';
import { UserCard } from '../entities/userCard.entity';
import { UserCardRepository } from '../repositories/userCard.repository';

@Injectable()
export class UsersCardsService {
  constructor(private usersCardsRepository: UserCardRepository) {}

  public async create(createUserCardDto: CreateUserCardDto): Promise<UserCard> {
    return this.usersCardsRepository.save(createUserCardDto);
  }

  public async update(
    id: number,
    updateUserCardDto: UpdateUserCardDto
  ): Promise<UpdateResult> {
    return await this.usersCardsRepository.update(id, updateUserCardDto);
  }

  public async findAll(): Promise<UserCard[]> {
    return await this.usersCardsRepository.find();
  }

  public async findOne(id: number): Promise<UserCard> {
    return await this.usersCardsRepository.findOne(id);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return await this.usersCardsRepository.delete(id);
  }
}
