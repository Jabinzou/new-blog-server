import { Category } from '../entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Category])], // you can use provider import other service into related module
  controllers: [CategoryController],
  providers: [CategoryService], // provide service module
  exports: [CategoryService],
})
export class CategoryModule {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}
}