import { PartialType } from '@nestjs/mapped-types';
import { OrderDetailsDto } from './create-order_detail.dto';
import { IsInt, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class UpdateOrderDetailDto extends PartialType(OrderDetailsDto) {
    @IsInt()
    @IsNotEmpty()
    order_id: number;
  
    @IsInt()
    @IsNotEmpty()
    product_id: number;
  
    @IsInt()
    @IsNotEmpty()
    address_id: number;
  
    @IsDate()
    @IsOptional()
    received_at?: Date;
  
    @IsDate()
    @IsOptional()
    transmitted_at?: Date;
  
    @IsInt()
    @IsNotEmpty()
    order_price: number;
  
    @IsInt()
    @IsOptional()
    deliveryCharges?: number;
  
    @IsInt()
    @IsOptional()
    taxes?: number;
  
    @IsInt()
    @IsOptional()
    total?: number;
  }
