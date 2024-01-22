import { Module } from '@nestjs/common';
import { UserHasPaymentOptionsService } from './user-has-payment-options.service';
import { UserHasPaymentOptionsController } from './user-has-payment-options.controller';

@Module({
  controllers: [UserHasPaymentOptionsController],
  providers: [UserHasPaymentOptionsService],
})
export class UserHasPaymentOptionsModule {}
