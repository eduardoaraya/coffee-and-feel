import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserNotificationDto } from '../dto/create-user-notification.dto';
import { UpdateUserNotificationDto } from '../dto/update-user-notification.dto';
import { UserNotification } from '../entities/userNotification.entity';
import { UserNotificationRepository } from '../repositories/userNotification.repository';

@Injectable()
export class UsersNotificationsService {
  constructor(
    private usersNotificationRepository: UserNotificationRepository
  ) {}

  public async create(
    createUserNotificationDto: CreateUserNotificationDto
  ): Promise<UserNotification> {
    return this.usersNotificationRepository.create(createUserNotificationDto);
  }

  public async update(
    id: number,
    updateUserNotificatonDto: UpdateUserNotificationDto
  ): Promise<UpdateResult> {
    return await this.usersNotificationRepository.update(
      id,
      updateUserNotificatonDto
    );
  }

  public async findAll(): Promise<UserNotification[]> {
    return await this.usersNotificationRepository.find();
  }

  public async findOne(id: number): Promise<UserNotification> {
    return await this.usersNotificationRepository.findOne(id);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.usersNotificationRepository.delete(id);
  }
}
