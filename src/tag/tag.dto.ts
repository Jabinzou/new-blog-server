import {
  IsNotEmpty,
  IsNumber,
  IsString,
  NotEquals,
  Max,
} from 'class-validator';
import { isString } from 'util';
export class TagDto {
  readonly id: number;
  readonly name: string;
  readonly articles: any[];
  readonly user: object;
}
export class CreateTagDto {
  @IsNotEmpty()
  @NotEquals('')
  @IsString()
  @Max(30)
  readonly name: string;

  @IsNumber()
  readonly userId: number;
}