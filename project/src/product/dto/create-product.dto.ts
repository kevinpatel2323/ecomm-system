import { IsString, IsInt, IsNumber, IsEnum, IsNotEmpty, Length } from 'class-validator';
import { size_enum } from '../entities/size.enum';

export class CreateProductDto {
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
