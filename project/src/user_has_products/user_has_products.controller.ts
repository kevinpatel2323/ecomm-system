import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserHasProductsService } from './user_has_products.service';
import { CreateUserHasProductsDto } from './dto/create-user_has_product.dto';
import { UpdateUserHasProductDto } from './dto/update-user_has_product.dto';

@Controller('user_has_products')
export class UserHasProductsController {
  constructor(private readonly userHasProductsService: UserHasProductsService) {}

  @Get()
  async findAll() {
    return this.userHasProductsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userHasProductsService.findOne(+id);
  }

  @Post()
  async create(@Body() createUserHasProductsDto: CreateUserHasProductsDto) {
    return this.userHasProductsService.create(createUserHasProductsDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserHasProductsDto: UpdateUserHasProductDto) {
    return this.userHasProductsService.update(+id, updateUserHasProductsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userHasProductsService.remove(+id);
  }
}
