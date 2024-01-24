import { Injectable, NotFoundException } from '@nestjs/common';
import { ColorQuery } from './entities/color.query'; // Import your ColorQuery service
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorService {
  constructor(private readonly colorQuery: ColorQuery) {}

  async create(createColorDto: CreateColorDto): Promise<Color> {
    return this.colorQuery.upsert(createColorDto);
  }

  async findAll(): Promise<Color[]> {
    return this.colorQuery.find();
  }

  async findOne(id: number): Promise<Color> {
    const color = await this.colorQuery.findOne(id);
    if (!color) {
      throw new NotFoundException(`Color with ID ${id} not found`);
    }
    return color;
  }

  async update(id: number, updateColorDto: UpdateColorDto): Promise<Color> {
    const color = await this.findOne(id);
    return this.colorQuery.upsert(updateColorDto);
  }

  async remove(id: number): Promise<Color> {
    const color = await this.findOne(id);
    return this.colorQuery.remove(id);
  }
}
