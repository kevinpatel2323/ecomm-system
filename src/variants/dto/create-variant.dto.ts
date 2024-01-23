import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateVariantDto {
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
