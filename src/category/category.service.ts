import { Category } from '../entities/category.entity';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  private readonly category: Category;
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async findAll(options): Promise<any> {
    const pageSize = +options.pageSize || 10;
    const page = options.page * pageSize || 0;
    const [list = [], count = 0] = await this.categoryRepository.findAndCount({
      where: {
        ...options,
      },
      skip: page,
      take: pageSize,
    });
    return {
      list,
      count,
    };
  }
}