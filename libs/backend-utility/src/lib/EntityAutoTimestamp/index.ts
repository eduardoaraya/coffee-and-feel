import { Column, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class AutoTimestampEntity {
  @Column({ name: 'created_at', nullable: false })
  public createdAt: number | string;

  @Column({ name: 'updated_at', nullable: true })
  public updatedAt: number | string;

  @BeforeUpdate()
  public setUpdatedAt() {
    this.updatedAt = new Date(Date.now()).toJSON();
  }

  @BeforeInsert()
  public setCreatedAt() {
    this.createdAt = new Date(Date.now()).toJSON();
  }
}
