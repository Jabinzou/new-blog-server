import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
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
Headers,
HttpException,
ParseIntPipe,
HttpStatus,
Response,
Request,
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
  async confirm(@Body() options: UserDto, @Response() res): Promise<any> {
    try {
      const params = {
        userName: decryptString(options.userName, options.key, options.iv),
        passWord: decryptString(options.passWord, options.key, options.iv),
      };
      const backup = await this.userService.verify(params);
      const token = jwt.sign(Object.assign({}, backup), 'kissmycutebaby', {
        expiresIn: '24h',
      });
      /**
       * @description 这里需要解析cookie设置，上线需要替换domain,多个cookie用逗号隔开
       */
      res.set('Set-Cookie',
        [
          `token=${token};Domain=localhost;Path=/;Max-Age=${24 * 60 * 60}`,
          `tag=${backup.id};Domain=localhost;Path=/;Max-Age=${24 * 60 * 60}`,
        ],
      );
      res.send(token);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
  /**
   * @description verify token
   * @param val {}
   * @example { token: ''}
   */
  @Post('promise')
  async promission(@Body() val) {
    try {
      jwt.verify(val.token, 'kissmycutebaby');
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.UNAUTHORIZED);
    }
  }
}