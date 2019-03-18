import {Body, Controller, Get, Param, Post, Query, ParseIntPipe, HttpException,
  HttpStatus,
  Options} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './article.dto';

@Controller('api/article')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService,
  ) {}
  /**
   * @desc get all articles
   * @param options
   */
  @Get('list')
  async getAll(@Query() options): Promise<any> {
    try {
      return await this.articleService.find(options);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * @desc add new articles
   * @param options
   */
  @Post('add')
  async add(@Body() options: CreateArticleDto): Promise<any> {
    try {
      return await this.articleService.add(options);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * @description 获取文章详情
   * @param options
   */
  @Get('detail')
  async getDetail(@Query() options): Promise<any> {
    try {
      await this.articleService.increment(options);
      return this.articleService.getDetail(options);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('up')
  async increment(@Body() options: object): Promise<any> {
    try {
      return await this.articleService.increment(options);
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
}