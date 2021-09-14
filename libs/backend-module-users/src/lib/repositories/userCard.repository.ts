import { EntityRepository, Repository } from 'typeorm';
import { UserCard } from '../entities/userCard.entity';

@EntityRepository(UserCard)
export class UserCardRepository extends Repository<UserCard> {}
