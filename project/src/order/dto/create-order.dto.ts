import { IsInt, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { status_enum } from '../entities/order.entity';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsEnum(status_enum)
  @IsNotEmpty()
  status: status_enum;

  @IsInt()
  @IsNotEmpty()
  total_quantity: number;

  @IsInt()
  @IsNotEmpty()
  paid_amount: number;

  @IsInt()
  @IsNotEmpty()
  net_amount: number;
}
