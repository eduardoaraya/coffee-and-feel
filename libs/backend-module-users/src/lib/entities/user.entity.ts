import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserGender {
  MALE = 'M',
  FEMALE = 'F',
  OTHER = 'O',
  NOT_DECLARED = 'N',
}

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_firstname', type: 'varchar' })
  userFirstName: string;

  @Column({ name: 'user_lastname', type: 'varchar' })
  userLastName: string;

  @Column({
    name: 'user_gender',
    type: 'enum',
    enum: UserGender,
    default: UserGender.NOT_DECLARED,
  })
  userGender: UserGender;

  @Column({ name: 'user_email', type: 'varchar' })
  userEmail: string;

  @Column({ name: 'user_birthday', type: 'date' })
  userBirthday: Date;

  @Column({ name: 'user_facebook', type: 'varchar', nullable: true })
  userFacebook?: string;

  @Column({ name: 'user_instagram', type: 'varchar', nullable: true })
  userInstagram?: string;

  @Column({ name: 'user_linkedin', type: 'varchar', nullable: true })
  userLinkedin?: string;

  @Column({ name: 'user_phone', type: 'varchar', nullable: true })
  userPhone?: string;

  @Column({ name: 'user_phone_alt', type: 'varchar', nullable: true })
  userPhoneAlt?: string;

  @Column({ name: 'user_email_verified', type: 'boolean', default: false })
  userEmailVerified: boolean;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
