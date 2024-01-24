import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DatabaseProvider } from 'database.provider';
import { ColorModule } from './colors/colors.module';
import { CategoryModule } from './category/category.module';
import { MediaModule } from './media/media.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order_details/order_details.module';
import { ProductModule } from './product/product.module';
import { TagModule } from './tag/tag.module';
import { VariantModule } from './variant/variant.module';
import { SocialModule } from './social/social.module';
import { UserHasAddressesModule } from './user_has_addresses/user_has_addresses.module';
import { UserHasPaymentOptionsModule } from './user_has_payment_options/user_has_payment_options.module';
import { UserHasProductsModule } from './user_has_products/user_has_products.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRootAsync({useClass:DatabaseProvider}),UsersModule, ColorModule, CategoryModule, MediaModule, OrderModule, OrderDetailsModule, ProductModule, TagModule, VariantModule, SocialModule, UserHasAddressesModule, UserHasPaymentOptionsModule, UserHasProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
