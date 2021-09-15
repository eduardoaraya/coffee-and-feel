import { Repository, EntityRepository } from 'typeorm';
import { UserNotification } from '../entities/userNotification.entity';

@EntityRepository(UserNotification)
export class UserNotificationRepository extends Repository<UserNotification> {}
