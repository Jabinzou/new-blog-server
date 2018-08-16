import {
  IsNumber,
  IsString,
  NotEquals,
  IsNotEmpty,
  Max,
} from 'class-validator';
/**
 * @desc validate params used class
 */
export class UserDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @NotEquals('')
  readonly userName: string;

  @IsString()
  @Max(50)
  readonly desc: string;
}