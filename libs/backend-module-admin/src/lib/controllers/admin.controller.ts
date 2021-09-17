import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';
import { AdminService } from '../services/admin.service';

@ApiTags('admin')
@Controller('admin')
export class AdminsController {
  private readonly adminService: AdminService;

  constructor(adminService: AdminService) {
    this.adminService = adminService;
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string | number) {
    return this.adminService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string | number,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string | number) {
    return this.adminService.remove(id);
  }
}
