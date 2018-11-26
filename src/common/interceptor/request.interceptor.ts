import { NestInterceptor, ExecutionContext, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * request schema to client
 */
export interface Response<T> {
  code: number;
  message: string;
  data: T;
}
export class RequestIntercenptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    call$: Observable<T>,
  ): Observable<Response<T>>{
    return call$.pipe(map(data => ({
      code: 1000,
      message: 'success',
      data,
    })));
  }
}