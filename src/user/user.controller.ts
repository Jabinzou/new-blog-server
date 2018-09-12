import { UserService } from './user.service';
import {
createQueryBuilder,
getRepository,
Repository,
} from 'typeorm';
import {
Get,
Post,
Controller,
Query,
Param,
HttpException,
ParseIntPipe,
HttpStatus,
Response,
Body,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { decryptString } from '../utils/stringUtil';
@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}
  @Get(':id')
  async findId(
    @Param('id', new ParseIntPipe())
    id,
  ): Promise<any> {
    return this.userService.findId(id);
  }
  @Post('verify')
  async confirm(@Body() options: UserDto): Promise<any> {
    try {
      const params = {
        userName: decryptString(options.userName, options.key, options.iv),
        passWord: decryptString(options.passWord, options.key, options.iv),
      };
      return await this.userService.verify(params);
    } catch (error) {
      throw new HttpException({error}, HttpStatus.UNAUTHORIZED);
    }
  }
}