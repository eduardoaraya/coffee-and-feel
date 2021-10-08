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
  product_price: string;
  product_weight: string;
  product_width: string;
  product_depth: string;
  product_height: string;
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
  product_price: string;

  @Column('float')
  product_weight: string;

  @Column('float')
  product_width: string;

  @Column('float')
  product_height: string;

  @Column('float')
  product_depth: string;

  @Column({ default: true })
  product_active: boolean;

  @CreateDateColumn()
  created_at?: string;

  @UpdateDateColumn()
  updated_at?: string;
}

export type IProduct = typeof Product['prototype'];
