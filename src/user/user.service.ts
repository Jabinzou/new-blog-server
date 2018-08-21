import { User } from '../entities/user.entity';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async addUser(options) {
    const user = this.userRepository.create();
    Object.keys(options).forEach(ele => {
      user[ele] = options[ele];
    });
    return await this.userRepository.save(user);
  }
  async findId(id: number): Promise<any> {
    return await this.userRepository.findOneOrFail(id);
  }
  async verify(options: UserDto): Promise<any> {
    return await this.userRepository.findOneOrFail({userName: options.userName, passWord: options.passWord});
  }
}