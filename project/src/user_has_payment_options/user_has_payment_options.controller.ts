import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserHasPaymentOptionsService } from './user_has_payment_options.service';
import { CreateUserHasPaymentOptionsDto } from './dto/create-user_has_payment_option.dto';

@Controller('user_has_payment_options')
export class UserHasPaymentOptionsController {
  constructor(private readonly userHasPaymentOptionsService: UserHasPaymentOptionsService) {}

  @Get()
  async findAll() {
    return this.userHasPaymentOptionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userHasPaymentOptionsService.findOne(+id);
  }

  @Post()
  async create(@Body() createUserHasPaymentOptionsDto: CreateUserHasPaymentOptionsDto) {
    return this.userHasPaymentOptionsService.create(createUserHasPaymentOptionsDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserHasPaymentOptionsDto: CreateUserHasPaymentOptionsDto) {
    return this.userHasPaymentOptionsService.update(+id, updateUserHasPaymentOptionsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userHasPaymentOptionsService.remove(+id);
  }
}
