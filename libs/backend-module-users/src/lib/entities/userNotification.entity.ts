/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_notification')
export class UserNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false, name: 'message' })
  message: string;

  @Column({ type: 'timestamp', nullable: true, name: 'read_at' })
  readAt?: Date;

  @CreateDateColumn()
  created_at?: string;

  @Column({ name: 'user_id', type: 'number', nullable: false })
  @ManyToOne((type) => User, (user) => user.id)
  userId: number;
}
