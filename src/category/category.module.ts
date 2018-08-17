import { Category } from '../entities/category.entity';
import { User } from '../entities/user.entity';
import { CategoryService } from './category.service';
import { UserService } from '../user/user.service';
import { CategoryController } from './category.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category, User])], // you can use provider import other service into related module
  controllers: [CategoryController],
  providers: [CategoryService, UserService], // provide service module
  exports: [CategoryService],
})
export class CategoryModule {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}
}