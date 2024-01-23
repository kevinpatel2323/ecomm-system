import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateUserHasAddressDto {
    @ApiProperty()
    @IsInt()
    userId: number;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    state: string;

    @ApiProperty()
    @IsString()
    country: string;

    @ApiProperty()
    @IsInt()
    postalCode: number;
    
}
