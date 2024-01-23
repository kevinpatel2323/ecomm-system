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
import { UserHasAddressService } from './user-has-address.service';
import { CreateUserHasAddressDto } from './dto/create-user-has-address.dto';
import { UpdateUserHasAddressDto } from './dto/update-user-has-address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from 'src/users/dto/search.dto';

@ApiTags('UserHasAddress')
@Controller('user-has-address')
export class UserHasAddressController {
  constructor(private readonly userHasAddressService: UserHasAddressService) {}

  @ApiOperation({ summary: 'Create UserHasAddress' })
  @Post()
  create(@Body() createUserHasAddressDto: CreateUserHasAddressDto) {
    return this.userHasAddressService.create(createUserHasAddressDto);
  }

  @ApiOperation({ summary: 'Find All UserHasAddress' })
  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.userHasAddressService.findAll(searchDto);
  }

  @ApiOperation({ summary: 'Find UserHasAddress By Id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHasAddressService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update UserHasAddress By Id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserHasAddressDto: UpdateUserHasAddressDto,
  ) {
    return this.userHasAddressService.update(+id, updateUserHasAddressDto);
  }

  @ApiOperation({ summary: 'Remove UserHasAddress' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasAddressService.remove(+id);
  }
}
