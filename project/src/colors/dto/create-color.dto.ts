import { IsString } from 'class-validator';

export class CreateColorDto {
  @IsString()
  name: string;

  @IsString()
  created_at?: string;

  @IsString()
  updated_at?: string;

  @IsString()
  deleted_at?: string;
}
