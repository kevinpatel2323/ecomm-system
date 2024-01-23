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
import { UserHasPaymentOptionsService } from './user-has-payment-options.service';
import { CreateUserHasPaymentOptionDto } from './dto/create-user-has-payment-option.dto';
import { UpdateUserHasPaymentOptionDto } from './dto/update-user-has-payment-option.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from 'src/users/dto/search.dto';

@ApiTags('UserHasPaymentOptions')
@Controller('user-has-payment-options')
export class UserHasPaymentOptionsController {
  constructor(
    private readonly userHasPaymentOptionsService: UserHasPaymentOptionsService,
  ) {}

  @ApiOperation({ summary: 'Create UserHasPaymentOptions' })
  @Post()
  create(@Body() createUserHasPaymentOptionDto: CreateUserHasPaymentOptionDto) {
    return this.userHasPaymentOptionsService.create(
      createUserHasPaymentOptionDto,
    );
  }

  @ApiOperation({ summary: 'Find All UserHasPaymentOptions' })
  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.userHasPaymentOptionsService.findAll(searchDto);
  }

  @ApiOperation({ summary: 'Find UserHasPaymentOptions By Id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHasPaymentOptionsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update UserHasPaymentOptions By Id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserHasPaymentOptionDto: UpdateUserHasPaymentOptionDto,
  ) {
    return this.userHasPaymentOptionsService.update(
      +id,
      updateUserHasPaymentOptionDto,
    );
  }

  @ApiOperation({ summary: 'Remove UserHasPaymentOptions' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasPaymentOptionsService.remove(+id);
  }
}
