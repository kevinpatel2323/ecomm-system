import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductQuery } from './entities/product.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductService,ProductQuery],
})
export class ProductsModule {}
