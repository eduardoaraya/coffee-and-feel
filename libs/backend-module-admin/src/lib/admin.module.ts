import { Module } from '@nestjs/common';
import { AdminsController } from './controllers/admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repositories/admin.repository';
import { AdminService } from './services/admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminRepository])],
  controllers: [AdminsController],
  providers: [AdminService],
  exports: [],
})
export class AdminModule {}
