import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHasAddressesDto } from './create-user_has_address.dto';
import { IsInt, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateUserHasAddressDto extends PartialType(CreateUserHasAddressesDto) {
    @IsInt()
    user_Id: number;
  
    @IsString()
    @IsNotEmpty()
    address: string;
  
    @IsString()
    @IsNotEmpty()
    city: string;
  
    @IsString()
    @IsNotEmpty()
    state: string;
  
    @IsString()
    @IsNotEmpty()
    country: string;
  
    @IsNumber()
    postal_code: number;
  }
