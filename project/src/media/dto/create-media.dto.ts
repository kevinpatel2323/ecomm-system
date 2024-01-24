import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateMediaDto {
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
