import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserHasAddressesService } from './user_has_addresses.service';
import { CreateUserHasAddressesDto } from './dto/create-user_has_address.dto';
import { UpdateUserHasAddressDto } from './dto/update-user_has_address.dto';

@Controller('user-has-addresses')
export class UserHasAddressesController {
  constructor(private readonly userHasAddressesService: UserHasAddressesService) {}

  @Get()
  async findAll() {
    return this.userHasAddressesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userHasAddressesService.findOne(+id);
  }

  @Post()
  async create(@Body() createUserHasAddressesDto: CreateUserHasAddressesDto) {
    return this.userHasAddressesService.create(createUserHasAddressesDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserHasAddressesDto: UpdateUserHasAddressDto) {
    return this.userHasAddressesService.update(+id, updateUserHasAddressesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userHasAddressesService.remove(+id);
  }
}
