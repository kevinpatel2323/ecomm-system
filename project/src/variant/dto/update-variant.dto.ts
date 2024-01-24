import { PartialType } from '@nestjs/mapped-types';
import { CreateVariantDto } from './create-variant.dto';
import { IsInt, IsEnum } from 'class-validator';
import { currency_enum } from '../entities/currency.enum';

export class UpdateVariantDto extends PartialType(CreateVariantDto) {
    @IsInt()
    product_Id: number;
  
    @IsInt()
    itemPrice: number;
  
    @IsEnum(currency_enum)
    currency: currency_enum;
  
    @IsInt()
    SKU: number;
  }
