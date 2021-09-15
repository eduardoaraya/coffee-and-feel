import {
  Get,
  Post,
  Patch,
  Delete,
  Controller,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserNotificationDto } from '../dto/create-user-notification.dto';
import { UpdateUserNotificationDto } from '../dto/update-user-notification.dto';
import { UsersNotificationsService } from '../services/usersNotifications.service';

@ApiTags('users/notifications')
@Controller('users/notifications')
export class UsersNotificationsController {
  constructor(
    private readonly usersNotificationService: UsersNotificationsService
  ) {}

  @Post()
  create(@Body() createUserNotificationDto: CreateUserNotificationDto) {
    return this.usersNotificationService.create(createUserNotificationDto);
  }

  @Get()
  findAll() {
    return this.usersNotificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersNotificationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersNotificationsDto: UpdateUserNotificationDto
  ) {
    return this.usersNotificationService.update(
      +id,
      updateUsersNotificationsDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersNotificationService.delete(+id);
  }
}
