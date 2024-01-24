import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHasPaymentOptionsDto } from './create-user_has_payment_option.dto';
import { IsInt, IsString, IsDate } from 'class-validator';

export class UpdateUserHasPaymentOptionDto extends PartialType(CreateUserHasPaymentOptionsDto) {
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
