import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
