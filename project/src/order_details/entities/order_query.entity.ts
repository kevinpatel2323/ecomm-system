import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OrderDetails } from './order_detail.entity';

@Injectable()
export class OrderDetailsQuery {
  constructor(
    @InjectRepository(OrderDetails)
    private readonly orderDetailsRepository: Repository<OrderDetails>,
  ) {}

  public find(where = null, relations = []): Promise<OrderDetails[]> {
    try {
      return this.orderDetailsRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<OrderDetails> {
    try {
      return this.orderDetailsRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<OrderDetails> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new OrderDetails();
      Object.assign(object, body);
      return await this.orderDetailsRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<OrderDetails> {
    try {
      return await this.orderDetailsRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
