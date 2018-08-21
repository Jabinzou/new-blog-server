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

  @IsString()
  @IsNotEmpty()
  @NotEquals('')
  readonly userName: string;

  @IsString()
  @IsNotEmpty()
  readonly passWord: string;
}