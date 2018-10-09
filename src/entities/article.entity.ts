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
  category: Category[];

  @ManyToMany(type => Tag, tag => tag.articles)
  @JoinTable()
  tag: Tag[];

  @Column({
    name: 'createAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Column({
    name: 'updateAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}