import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AdminRole {
  SUPER = 'S',
  ADMIN = 'A',
  EDITOR = 'E',
  VIEWER = 'V',
}

@Entity({ name: 'admin' })
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'admin_firstname', type: 'varchar' })
  adminFirstname: string;

  @Column({ name: 'admin_lastname', type: 'varchar' })
  adminLastname: string;

  @Column({ name: 'admin_email', type: 'varchar' })
  adminEmail: string;

  @Column({ name: 'admin_password', type: 'text' })
  adminPassword: string;

  @Column({
    name: 'admin_role',
    type: 'enum',
    enum: AdminRole,
    default: AdminRole.VIEWER,
  })
  adminRole: AdminRole;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
