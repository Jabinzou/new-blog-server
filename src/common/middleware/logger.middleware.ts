import {NestMiddleware, MiddlewareConsumer, Logger, MiddlewareFunction, Injectable} from '@nestjs/common';
@Injectable()
export class LoggerMiddlerWare implements NestMiddleware {
  resolve(...arg: any[]): MiddlewareFunction {
    return (req, res, next) => {
      process.env.NODE_ENV === 'developement' && Logger.log(JSON.stringify({
        req: {
          url: req.url,
          methods: req.method,
          query: req.query,
          params: req.params,
          body: req.body,
        },
      }));
      next();
    };
  }
}