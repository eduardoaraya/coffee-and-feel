import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { UsersAddressesController } from './controllers/usersAdresses.controller';
import { UsersAddressesService } from './services/usersAddresses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { UserAddressRepository } from './repositories/userAddress.repository';
import { UserCardRepository } from './repositories/userCard.repository';
import { UserNotificationRepository } from './repositories/userNotification.repository';
import { UsersNotificationsController } from './controllers/usersNotifications.controller';
import { UsersCardsController } from './controllers/usersCards.controller';
import { UsersNotificationsService } from './services/usersNotifications.service';
import { UsersCardsService } from './services/usersCards.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      UserAddressRepository,
      UserCardRepository,
      UserNotificationRepository,
    ]),
  ],
  controllers: [
    UsersController,
    UsersAddressesController,
    UsersNotificationsController,
    UsersCardsController,
  ],
  providers: [
    UsersService,
    UsersAddressesService,
    UsersNotificationsService,
    UsersCardsService,
  ],
})
export class UsersModule {}
