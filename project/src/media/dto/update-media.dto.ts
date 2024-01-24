import { PartialType } from '@nestjs/mapped-types';
import { CreateMediaDto } from './create-media.dto';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateMediaDto extends PartialType(CreateMediaDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    path: string;
  
    @IsNumber()
    @IsOptional()
    size?: number;
  
    @IsString()
    @IsOptional()
    mimetype?: string;
}
