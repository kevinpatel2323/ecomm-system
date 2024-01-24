import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { VariantService } from './variant.service';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';

@Controller('variants')
export class VariantController {
  constructor(private readonly variantService: VariantService) {}

  @Get()
  async findAll() {
    return this.variantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.variantService.findOne(+id);
  }

  @Post()
  async create(@Body() createVariantDto: CreateVariantDto) {
    return this.variantService.create(createVariantDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVariantDto: UpdateVariantDto) {
    return this.variantService.update(+id, updateVariantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.variantService.remove(+id);
  }
}
