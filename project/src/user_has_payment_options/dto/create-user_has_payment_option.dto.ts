import { IsInt, IsString, IsDate } from 'class-validator';

export class CreateUserHasPaymentOptionsDto {
  @IsInt()
  user_Id: number;

  @IsString()
  card_number: string;

  @IsString()
  card_holder_name: string;

  @IsDate()
  expiration_date: Date;

  @IsString()
  cvv: string;
}
