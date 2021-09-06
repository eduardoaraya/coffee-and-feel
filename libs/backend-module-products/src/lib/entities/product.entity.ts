/* eslint-disable @typescript-eslint/ban-types */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

export interface ProductEntityModel {
  id: number;
  product_SKU: string;
  product_name: string;
  product_price: number;
  product_weight: number;
  product_width: number;
  product_depth: number;
  product_height: number;
  product_active: boolean;
}

@Entity()
export class Product implements ProductEntityModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  product_SKU: string;

  @Column('varchar')
  product_name: string;

  @Column('decimal')
  product_price: number;

  @Column('float')
  product_weight: number;

  @Column('float')
  product_width: number;

  @Column('float')
  product_height: number;

  @Column('float')
  product_depth: number;

  @Column({ default: true })
  product_active: boolean;

  @CreateDateColumn()
  created_at?: string;

  @UpdateDateColumn()
  updated_at?: string;
}
