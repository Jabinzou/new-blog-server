import { Article } from '../entities/article.entity';
import { CategoryService } from '../category/category.service';
import { UserService } from '../user/user.service';
import { TagService } from '../tag/tag.service';
import { getRepository, createQueryBuilder, Repository, Like } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './article.dto';
import * as xss from 'xss';
@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
    private readonly tagService: TagService,
  ) {}
  /**
   * @desc 获取文章列表
   * @param options query options
   */
  async find(options): Promise<any> {
    const pagesize = Number(options.pagesize) || 10;
    const page = Number(options.page) * pagesize || 0;
    let param = {};
    let term = '';
    if (options.search) {
      term = 'articles.title Like :title OR articles.desc Like :desc OR articles.content Like :content';
      param = {
        title: `%${options.search}%`,
        desc: `%${options.search}%`,
        content: `%${options.search}%`,
      };
    }
    const [list = [], count = 0] = await getRepository(Article)
      .createQueryBuilder('article')
      .leftJoin('article.user', 'u')
      .select([
        'article.id',
        'article.desc',
        'article.createAt',
        'article.title',
        'article.views',
        'u.id',
      ])
      .leftJoinAndSelect('article.category', 'category')
      .leftJoinAndSelect('article.tag', 'tag')
      .where(term, param)
      .orderBy({
        'article.createAt': 'DESC',
      })
      .offset(page)
      .limit(pagesize)
      .getManyAndCount();

    return { list, count };
  }
  /**
   * @desc add new articles
   * @param options add  articles
   */
  async add(options: CreateArticleDto): Promise<any> {
    const article = this.articleRepository.create();
    const user = await this.userService.findId(options.userId);
    const cate = await this.categoryService.find(options.categoryId);
    const tag = await this.tagService.findIds(options.tagId);
    const option = {
      stripIgnoreTagBody: ['script'], // 过滤script标签
    };
    // article.content = xss(options.content, option);
    article.content = options.content;
    article.title = options.title;
    article.desc = options.desc;
    article.user = user;
    article.category = cate;
    article.tag = tag;
    try {
      await this.articleRepository.save(article);
    } catch (err) {
      throw new Error(err);
    }
  }
  /**
   * @desc increment views
   * @param id
   */
  async increment(id: object): Promise<any> {
    await this.articleRepository.increment(id, 'views', 1);
  }
  /**
   * @desc 获取详情
   */
  async getDetail(id: number): Promise<any> {
    try {
      return await this.articleRepository.findOneOrFail(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}