import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasPaymentOptions } from './entities/user_has_payment_option.entity';
import { UserHasPaymentOptionsController } from './user_has_payment_options.controller';
import { UserHasPaymentOptionsService } from './user_has_payment_options.service';
import { UserHasPaymentOptionsQuery } from './entities/user_has_payment_option.query';

@Module({
  imports: [TypeOrmModule.forFeature([UserHasPaymentOptions])],
  controllers: [UserHasPaymentOptionsController],
  providers: [UserHasPaymentOptionsService, UserHasPaymentOptionsQuery],
  exports: [UserHasPaymentOptionsService],
})
export class UserHasPaymentOptionsModule {}
