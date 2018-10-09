import { CategoryService } from '../category/category.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Query,
  Param,
  HttpException,
  HttpStatus,
  Response,
  Options,
} from '@nestjs/common';
// 在这里可以搭配swagger进行接口的测试
@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService){}
  @Get('list')
  async getAllCate(@Query() options): Promise<any> {
    try {
      return await this.categoryService.findAll(options);
    } catch (error) {
      throw new HttpException({error}, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * @desc 添加分类
   */
  @Post('add')
  async addCate(@Body() options): Promise<any> {
    try {
      await this.categoryService.addCate(options);
      return null;
    } catch (error) {
      throw new HttpException({error}, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * @desc 删除分类
   */
  @Post('delete')
  async deleteCate(@Body() options): Promise<any> {
    try {
      await this.categoryService.deleteCate(options);
      return null;
    } catch (error) {
      throw new HttpException({error}, HttpStatus.BAD_REQUEST);
    }
  }
}