import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNotEmpty, IsInt, IsNumber, IsEnum } from 'class-validator';
import { size_enum } from '../entities/size.enum';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsInt()
    @IsNotEmpty()
    weight: number;
  
    @IsInt()
    @IsNotEmpty()
    quantity: number;
  
    @IsNumber()
    price: number;
  
    @IsString()
    @IsNotEmpty()
    collection: string;
  
    @IsString()
    description: string;
  
    @IsEnum(size_enum)
    size: size_enum;
  
    // Uncomment and update the type if userId and colorId are part of your requirements
    // @IsInt()
    // userId: number;
  
    // @IsInt()
    // colorId: number;
  
    @IsInt()
    category_id: number;
  }
