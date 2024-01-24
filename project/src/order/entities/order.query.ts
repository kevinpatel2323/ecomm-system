import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Order } from './order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import {User} from '../../users/entities/user.entity';

@Injectable()
export class OrderQuery {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  public find(where = null, relations = []): Promise<Order[]> {
    try {
      return this.orderRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<Order> {
    try {
      return this.orderRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<Order> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new Order();
      Object.assign(object, body);
      return await this.orderRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<Order> {
    try {
      return await this.orderRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
