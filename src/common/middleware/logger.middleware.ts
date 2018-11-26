import {NestMiddleware, MiddlewareConsumer, Logger, MiddlewareFunction, Injectable} from '@nestjs/common';
@Injectable()
export class LoggerMiddlerWare implements NestMiddleware {
  resolve(...arg: any[]): MiddlewareFunction {
    return (req, res, next) => {
      Logger.log(JSON.stringify({
        req: {
          url: req.url,
          methods: req.method,
          query: req.query,
          params: req.params,
        },
      }));
      next();
    };
  }
}