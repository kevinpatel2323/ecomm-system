import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetails } from './entities/order_detail.entity';
import { OrderDetailsQuery } from './entities/order_query.entity';
import { OrderDetailsDto } from './dto/create-order_detail.dto';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetails)
    private readonly orderDetailsRepository: Repository<OrderDetails>,
    private readonly orderDetailsQuery: OrderDetailsQuery,
  ) {}

  async findAll(): Promise<OrderDetails[]> {
    return this.orderDetailsQuery.find();
  }

  async findOne(id: number): Promise<OrderDetails> {
    return this.orderDetailsQuery.findOne({ id });
  }

  async create(orderDetailsDto: OrderDetailsDto): Promise<OrderDetails> {
    return this.orderDetailsQuery.upsert(orderDetailsDto);
  }

  async update(id: number, orderDetailsDto: Partial<OrderDetailsDto>): Promise<OrderDetails> {
    return this.orderDetailsQuery.upsert({ id, ...orderDetailsDto });
  }

  async remove(id: number): Promise<OrderDetails> {
    return this.orderDetailsQuery.remove(id);
  }
}
