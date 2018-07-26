import { Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne } from 'typeorm';

@Entity()
export class Categorys {
  @PrimaryGeneratedColumn() id: number;
  @Column({})
}