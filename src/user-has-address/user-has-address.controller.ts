import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserHasAddressService } from './user-has-address.service';
import { CreateUserHasAddressDto } from './dto/create-user-has-address.dto';
import { UpdateUserHasAddressDto } from './dto/update-user-has-address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserHasAddress')
@Controller('user-has-address')
export class UserHasAddressController {
  constructor(private readonly userHasAddressService: UserHasAddressService) {}

  @Post()
  create(@Body() createUserHasAddressDto: CreateUserHasAddressDto) {
    return this.userHasAddressService.create(createUserHasAddressDto);
  }

  @Get()
  findAll() {
    return this.userHasAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHasAddressService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserHasAddressDto: UpdateUserHasAddressDto,
  ) {
    return this.userHasAddressService.update(+id, updateUserHasAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasAddressService.remove(+id);
  }
}
