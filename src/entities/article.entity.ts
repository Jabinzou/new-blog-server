import { Category } from './category.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column({type: 'longtext'}) // 文本类型
  content: string;

  @ManyToOne(type => User, user => user.article, {cascade: true, onDelete: 'CASCADE', primary: true})
  user: User;

  @Column({
    default: () => 0,
  })
  views: number;

  @ManyToOne(type => Category, category => category.articles, { cascade: true, onDelete: 'CASCADE', primary: true})
  category: Category;

  @ManyToMany(type => Tag, tag => tag.articles)
  @JoinTable()
  tag: Tag[];

  @CreateDateColumn({
    nullable: false,
    name: 'createAt',
    comment: '创建时间',
  })
  createAt: Date | string;
  @UpdateDateColumn({
    nullable: false,
    name: 'updateAt',
    comment: '更新时间',
  })
  updateAt: Date | string;
}