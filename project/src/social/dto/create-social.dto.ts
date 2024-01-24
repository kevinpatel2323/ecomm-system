import { IsInt, IsString } from 'class-validator';

export class CreateSocialDto {
  @IsInt()
  product_Id: number;

  @IsString()
  key: string;

  @IsString()
  value: string;
}
