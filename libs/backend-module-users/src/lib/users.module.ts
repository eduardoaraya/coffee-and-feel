import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { UsersAddressesController } from './controllers/usersAdresses.controller';
import { UsersAddressesService } from './services/usersAddresses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress } from './entities/userAddress.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserAddress])],
  controllers: [UsersController, UsersAddressesController],
  providers: [UsersService, UsersAddressesService],
})
export class UsersModule {}
