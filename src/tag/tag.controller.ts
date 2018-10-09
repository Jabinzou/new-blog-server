import {Body, Controller, Get, Param, Post, Query, ParseIntPipe, HttpException,
  HttpStatus} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './tag.dto';

@Controller('api/tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  /**
   * @desc get query tag list
   * @param options
   */
  @Get('list')
  async getAll(@Query() options): Promise<any> {
    try {
      return await this.tagService.findTag(options);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * @desc add new tag
   */
  @Post('add')
  async add(@Body() options: CreateTagDto): Promise<any>{
    try {
      await this.tagService.add(options);
      return 'success';
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * @desc delete tag
   * @param options Array
   */
  @Post('delete')
  async deleteTag(@Body() options): Promise<any> {
    try {
      await this.tagService.deleteTag(options);
      return null;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
 }