/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('user_points_wallet')
export class UserPointsWallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'points_available', type: 'int', default: 0 })
  pointsAvailable: number;

  @Column({ name: 'points_total', type: 'int', default: 0 })
  pointsTotal: number;

  @Column({ name: 'points_blocked', type: 'int', default: 0 })
  pointsBlocked: number;

  @Column({ name: 'user_id' })
  @OneToOne((type) => User)
  userId: number;
}
