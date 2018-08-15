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
  async getAllCate(@Query() options, @Response() res): Promise<any> {
    try {
      return await this.categoryService.findAll(options);
    } catch (error) {
      throw new HttpException({error}, HttpStatus.BAD_REQUEST);
    }
  }
}