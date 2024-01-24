import { IsInt, IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';

export class CreateUserHasAddressesDto {
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
