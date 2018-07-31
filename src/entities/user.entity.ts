import { Article } from './article.entity';
import { Category } from './category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  passWord: string;

  @Column({length: 100, default: ''})
  desc: string;

  @Column({type: 'int', default: 0})
  isSuper: number;

  @OneToMany(type => Article, article => article.user)
  article: Article[];

  @OneToMany(type => Category, category => category.user)
  category: Category[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}