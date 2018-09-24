import { Tag } from '../entities/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository, getRepository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CreateTagDto } from './tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    private readonly userService: UserService,
  ) {}
  /**
   * @desc get filter tag
   * @param options check options any
   */
  async findTag(options: object): Promise<any> {
    const [list = [], count = 0] = await this.tagRepository.findAndCount({
      select: ['id', 'name', 'createAt'],
      // relations: ['user', 'articles'],
      where: {
        ...options,
      },
    });
    return {list, count};
  }

  /**
   * @desc add tag
   */
  async add(options: CreateTagDto): Promise<any> {
    const user = await this.userService.findId(options.userId);
    const tag = await this.tagRepository.create();
    tag.user = user;
    tag.name = options.name;
    return await this.tagRepository.save(tag);
  }
  /**
   * @desc get ids query result
   * @param options
   */
  async findIds(options: number[]): Promise<any> {
    return await this.tagRepository.findByIds(options);
  }
}