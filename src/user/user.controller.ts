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
} from '@nestjs/common';
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
}