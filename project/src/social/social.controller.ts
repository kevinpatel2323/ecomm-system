import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';

@Controller('socials')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Get()
  async findAll() {
    return this.socialService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.socialService.findOne(+id);
  }

  @Post()
  async create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(createSocialDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSocialDto: UpdateSocialDto) {
    return this.socialService.update(+id, updateSocialDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.socialService.remove(+id);
  }
}
