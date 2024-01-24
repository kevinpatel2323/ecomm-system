import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialDto } from './create-social.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateSocialDto extends PartialType(CreateSocialDto) {
    @IsInt()
    product_Id: number;
  
    @IsString()
    key: string;
  
    @IsString()
    value: string;
  }
