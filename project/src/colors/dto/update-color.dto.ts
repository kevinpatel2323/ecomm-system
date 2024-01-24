import { PartialType } from '@nestjs/mapped-types';
import { CreateColorDto } from './create-color.dto';
import { IsString } from 'class-validator';

export class UpdateColorDto extends PartialType(CreateColorDto) {  
    @IsString()
    name: string;
  
    @IsString()
    created_at?: string;
  
    @IsString()
    updated_at?: string;
  
    @IsString()
    deleted_at?: string;
}
