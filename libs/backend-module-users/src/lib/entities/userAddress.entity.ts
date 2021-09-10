/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

export interface UserAddressEntityModel {
  id: number;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  addressLineOne: string;
  addressLineTwo: string;
  addressReference?: string;
  userId: number;
}

@Entity('user_address')
export class UserAddress implements UserAddressEntityModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column({ name: 'address_line_one', type: 'varchar' })
  addressLineOne: string;

  @Column({ name: 'address_line_two', type: 'varchar' })
  addressLineTwo: string;

  @Column({ name: 'address_reference', type: 'varchar', nullable: true })
  addressReference?: string;

  @Column()
  @ManyToOne((type) => User, (user) => user.id)
  userId: number;
}
