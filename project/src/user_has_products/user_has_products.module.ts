// user_has_products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasProductsController } from './user_has_products.controller';
import { UserHasProductsService } from './user_has_products.service';
import { UserHasProductsQuery } from './entities/user_has_product.query';
import { UserHasProducts } from './entities/user_has_product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserHasProducts]),
    // Import other modules if needed
  ],
  controllers: [UserHasProductsController],
  providers: [UserHasProductsService, UserHasProductsQuery],
  exports: [UserHasProductsService], // Export the service if needed in other modules
})
export class UserHasProductsModule {}
