import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt, IsString,  } from "class-validator";
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @ApiProperty()
    @IsInt()
    userId:number

    @ApiProperty()
    @IsDateString()
    date:Date

    @ApiProperty()
    @IsString()
    status:string

    @ApiProperty()
    @IsInt()
    totalQuantity:number

    @ApiProperty()
    @IsInt()
    paidAmount:number

    @ApiProperty()
    @IsInt()
    netAmount:number
}
