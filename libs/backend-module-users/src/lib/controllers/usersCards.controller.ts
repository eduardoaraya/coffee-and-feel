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
import { CreateUserCardDto } from '../dto/create-user-card.dto';
import { UpdateUserCardDto } from '../dto/update-user-card.to';
import { UsersCardsService } from '../services/usersCards.service';

@ApiTags('users/cards')
@Controller('users/cards')
export class UsersCardsController {
  constructor(private readonly usersCardsService: UsersCardsService) {}

  @Post()
  create(@Body() createUserCardDto: CreateUserCardDto) {
    return this.usersCardsService.create(createUserCardDto);
  }

  @Get()
  findAll() {
    return this.usersCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersCardsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserCardDto: UpdateUserCardDto
  ) {
    return this.usersCardsService.update(+id, updateUserCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersCardsService.remove(+id);
  }
}
