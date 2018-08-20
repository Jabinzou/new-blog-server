import { ArticleController } from './article.controller';
import { Article } from '../entities/article.entity';
import { ArticleService } from './article.service';
import { TagModule } from '../tag/tag.module';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TagModule, UserModule, CategoryModule, TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {
  constructor(
    private readonly articleService: ArticleService,
  ) {}
}