import { IsInt } from 'class-validator';

export class CreateUserHasProductsDto {
  @IsInt()
  user_Id: number;

  @IsInt()
  product_Id: number;
}
