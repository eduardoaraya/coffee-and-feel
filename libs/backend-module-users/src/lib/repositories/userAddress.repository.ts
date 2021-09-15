import { EntityRepository, Repository } from 'typeorm';
import { UserAddress } from '../entities/userAddress.entity';

@EntityRepository(UserAddress)
export class UserAddressRepository extends Repository<UserAddress> {}
