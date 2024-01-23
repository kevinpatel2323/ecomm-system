import { PartialType } from '@nestjs/swagger';
import { CreateVariantDto } from './create-variant.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class UpdateVariantDto extends PartialType(CreateVariantDto) {
    @ApiProperty()
    @IsInt()
    productId: number;

    @ApiProperty()
    @IsInt()
    itemPrice: number;

    @ApiProperty()
    @IsString()
    currency: string;

    @ApiProperty()
    @IsInt()
    SKU: number;
}
