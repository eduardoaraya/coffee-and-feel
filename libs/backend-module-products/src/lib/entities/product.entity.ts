/* eslint-disable @typescript-eslint/ban-types */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

export interface ProductEntityModel {
  id: number;
  product_SKU: string;
  product_name: string;
  product_price: number;
  product_weight: number;
  product_width: number;
  product_depth: number;
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

  @Column({ type: 'timestamp', nullable: false })
  created_at?: string;

  @Column({ type: 'timestamp', nullable: false })
  updated_at?: string;

  @BeforeInsert()
  public createdTimestamp() {
    this.created_at = new Date(Date.now()).toJSON();
  }

  @BeforeUpdate()
  public updatedTimestamp() {
    this.updated_at = new Date(Date.now()).toJSON();
  }
}
