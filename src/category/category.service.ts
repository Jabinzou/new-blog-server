import { Category } from '../entities/category.entity';
import { User } from '../entities/user.entity';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class CategoryService {
  private readonly category: Category;
  private readonly user: User;
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly userService: UserService,
  ) {}
  /**
   * @desc get all category of article
   * @param options request options
   */
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
  /**
   * @desc add new category
   */
  async addCate(options): Promise<any> {
    const user = await this.userService.findId(options.userId);
    const cate = this.categoryRepository.create();
  }
}