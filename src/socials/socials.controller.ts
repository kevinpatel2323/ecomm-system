import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from 'src/users/dto/search.dto';
import { SocialsService } from './socials.service';
import { UpdateSocialDto } from './dto/update-social.dto';
import { CreateSocialDto } from './dto/create-social.dto';

@ApiTags('Socials')
@Controller('socials')
export class SocialsController {
  constructor(private readonly socialsService: SocialsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new variant' })
  create(@Body() CreateSocialDto:CreateSocialDto) {
    return this.socialsService.create(CreateSocialDto);
  }

  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.socialsService.findAll(searchDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateSocialDto:UpdateSocialDto) {
    return this.socialsService.update(+id, UpdateSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialsService.remove(+id);
  }
}
