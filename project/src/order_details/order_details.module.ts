import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/order_detail.entity';
import { OrderDetailsController } from './order_details.controller';
import { OrderDetailsService } from './order_details.service';
import { OrderDetailsQuery } from './entities/order_query.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([OrderDetails]),
    OrderDetails, // Include the related module
  ],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService, OrderDetailsQuery],
})
export class OrderDetailsModule {}

