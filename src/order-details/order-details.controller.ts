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
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';


@ApiTags('Order Details')
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Social' })
  create(@Body() CreateOrderDetailDto:CreateOrderDetailDto) {
    return this.orderDetailsService.create(CreateOrderDetailDto);
  }

  @Get()
  findAll(@Query() searchDto: SearchDto) {
    return this.orderDetailsService.findAll(searchDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateOrderDetailDto:UpdateOrderDetailDto) {
    return this.orderDetailsService.update(+id, UpdateOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDetailsService.remove(+id);
  }
}
