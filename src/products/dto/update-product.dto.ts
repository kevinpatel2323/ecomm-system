import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    @IsInt()
    userId: number

    @ApiProperty()
    @IsInt()
    categoryId: number

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsInt()
    weight: number

    @ApiProperty()
    @IsString()
    collection: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsInt()
    quantity: number

    @ApiProperty()
    @IsInt()
    price: number
}
