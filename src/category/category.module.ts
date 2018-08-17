import { Category } from '../entities/category.entity';
import { User } from '../entities/user.entity';
import { CategoryService } from './category.service';
import { UserService } from '../user/user.service';
import { CategoryController } from './category.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category, User])],
  controllers: [CategoryController],
  providers: [CategoryService, UserService],
  exports: [CategoryService],
})
export class CategoryModule {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}
}