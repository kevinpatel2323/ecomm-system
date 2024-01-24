import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderQuery } from './entities/order.query';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderQuery: OrderQuery,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderQuery.find();
  }

  async findOne(id: number): Promise<Order> {
    return this.orderQuery.findOne({ id });
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderQuery.upsert(createOrderDto);
  }

  async update(id: number, updateOrderDto: Partial<CreateOrderDto>): Promise<Order> {
    return this.orderQuery.upsert({ id, ...updateOrderDto });
  }

  async remove(id: number): Promise<Order> {
    return this.orderQuery.remove(id);
  }
}
