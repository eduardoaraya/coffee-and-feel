import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { AdminRepository } from '../repositories/admin.repository';
import * as bcrypt from 'bcrypt';
import { Admin } from '../entities/admin.entity';
import { UpdateAdminDto } from '../dto/update-admin.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class AdminService {
  private readonly adminRepository: AdminRepository;

  constructor(adminRepository: AdminRepository) {
    this.adminRepository = adminRepository;
  }

  public async create(createAdminDto: CreateAdminDto) {
    const hashedPassword = await this.hashPassword(
      createAdminDto.adminPassword
    );

    return await this.adminRepository.save({
      ...createAdminDto,
      adminPassword: hashedPassword,
    });
  }

  public async findAll(): Promise<Admin[]> {
    return await this.adminRepository.find();
  }

  public async findOne(id: string | number): Promise<Admin> {
    return await this.adminRepository.findOne(+id);
  }

  public async update(
    id: string | number,
    updateAdminDto: UpdateAdminDto
  ): Promise<UpdateResult> {
    return await this.adminRepository.update(+id, updateAdminDto);
  }

  public async remove(id: string | number): Promise<DeleteResult> {
    return await this.adminRepository.softDelete(id);
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
