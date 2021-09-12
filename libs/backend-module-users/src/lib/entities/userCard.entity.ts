/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

enum PaymentType {
  CREDIT_CARD = 'CC',
  BOLETO = 'BO',
  DEBIT_CARD = 'DC',
  PIX = 'PX',
}

@Entity('user_card')
export class UserCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_cc_provider', type: 'varchar', nullable: false })
  userCCProvider: string;

  @Column({ name: 'user_cc_fullname', type: 'varchar', nullable: false })
  userCCFullname: string;

  @Column({ name: 'user_cc_last_four', type: 'int', nullable: false })
  userCCLastFour: number;

  @Column({ name: 'user_cc_expiry_date', type: 'date', nullable: false })
  userCCExpiryDate: Date;

  @Column({ name: 'user_cc_payment_token', type: 'varchar', nullable: false })
  userPaymentToken: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @Column({ name: 'user_id' })
  @ManyToOne((type) => User, (user) => user.id)
  userId: number;
}
