import { EntityRepository, AbstractRepository, DeleteResult } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
  public async saveUser(createUserDto: CreateUserDto) {
    return await this.repository.save({
      ...createUserDto,
      userEmail: createUserDto.userEmail.toUpperCase(),
    });
  }

  public async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return await this.repository.update(+id, updateUserDto);
  }

  public async findUserById(id: number): Promise<User> {
    return this.repository.findOne(+id);
  }

  public async findAllUsers(): Promise<User[]> {
    return this.repository.find();
  }

  public async deleteUser(id: number): Promise<DeleteResult> {
    return this.repository.softDelete(+id);
  }

  public async findUserByEmail(email: string, id: number | null = null) {
    if (id) {
      return await this.repository.find({
        where: { id: id, userEmail: email },
      });
    } else {
      return await this.repository.find({
        where: { userEmail: email },
      });
    }
  }

  public async findUserByCPF(cpf: string, id: number = null) {
    if (id) {
      return await this.repository.find({ where: { id: id, userCPF: cpf } });
    }
  }
}
