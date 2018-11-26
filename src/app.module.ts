import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { ArticleModule } from './article/article.module';
import { LoggerMiddlerWare } from 'common/middleware/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // CategoryModule,
    // TagModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddlerWare)
      .forRoutes('/');
  }
}
