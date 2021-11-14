import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  screenName: string;

  @Column({ length: 128 })
  password: string;
}
