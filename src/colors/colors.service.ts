import { Injectable } from '@nestjs/common';
import { ColorQuery } from './entities/color.query';
import { CreateColorDto } from './dto/create-color.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Injectable()
export class ColorService {
  constructor(private readonly colorQuery: ColorQuery) {}
  create(createcolorDto: CreateColorDto) {
    return this.colorQuery.upsert(createcolorDto);
  }

  findAll(searchDto: SearchDto) {
    return this.colorQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.colorQuery.findOne({ id: id });
  }

  update(id: number, updateColorDto: UpdateColorDto) {
    return this.colorQuery.upsert({ id: id, ...updateColorDto });
  }

  remove(id: number) {
    return this.colorQuery.remove(id);
  }
}
