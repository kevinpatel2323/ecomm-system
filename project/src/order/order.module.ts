import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderQuery } from './entities/order.query';
import { Order } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    OrderModule, // Include the related module
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderQuery],
})
export class OrderModule {}
