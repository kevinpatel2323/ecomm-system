import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  firstName?: string;

  @IsString()
  @IsEmail()
  email?: string;

  @IsString()
  password?: string; // Include password if allowing updates

  @IsString()
  @Length(10, 10)
  mobileNo?: string;
}
