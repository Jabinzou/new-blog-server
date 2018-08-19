import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from '../entities/tag.entity';
import { UserModule } from '../user/user.module';
@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Tag])],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {
  constructor(private readonly tagService: TagService) {}
}