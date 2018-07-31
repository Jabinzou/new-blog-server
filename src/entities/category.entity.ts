import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Article } from './article.entity';
import { User } from './user.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: string;

  @OneToMany(type => Article, article => article.category)
  articles: Article[];

  @ManyToOne(type => User, user => user.category)
  user: User;

  @Column({
    name: 'createdAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updatedAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}