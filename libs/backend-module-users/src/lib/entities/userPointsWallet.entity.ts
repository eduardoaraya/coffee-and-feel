import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('user_points_wallet')
export class UserPointsWallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'points_available', type: 'number', default: 0 })
  pointsAvailable: number;

  @Column({ name: 'points_total', type: 'number', default: 0 })
  pointsTotal: number;

  @Column({ name: 'points_blocked', type: 'number', default: 0 })
  pointsBlocked: number;

  @Column({ name: 'user_id', nullable: false, type: 'number' })
  @OneToOne((type) => User)
  userId: number;
}
