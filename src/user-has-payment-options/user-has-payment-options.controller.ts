import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserHasPaymentOptionsService } from './user-has-payment-options.service';
import { CreateUserHasPaymentOptionDto } from './dto/create-user-has-payment-option.dto';
import { UpdateUserHasPaymentOptionDto } from './dto/update-user-has-payment-option.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserHasPaymentOptions')
@Controller('user-has-payment-options')
export class UserHasPaymentOptionsController {
  constructor(
    private readonly userHasPaymentOptionsService: UserHasPaymentOptionsService,
  ) {}

  @Post()
  create(@Body() createUserHasPaymentOptionDto: CreateUserHasPaymentOptionDto) {
    return this.userHasPaymentOptionsService.create(
      createUserHasPaymentOptionDto,
    );
  }

  @Get()
  findAll() {
    return this.userHasPaymentOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHasPaymentOptionsService.findOne(+id);
  }

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasPaymentOptionsService.remove(+id);
  }
}
