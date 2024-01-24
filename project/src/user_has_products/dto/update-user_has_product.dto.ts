import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHasProductsDto } from './create-user_has_product.dto';
import { IsInt } from 'class-validator';

export class UpdateUserHasProductDto extends PartialType(CreateUserHasProductsDto) {
    @IsInt()
    user_Id: number;
  
    @IsInt()
    product_Id: number;
  }
