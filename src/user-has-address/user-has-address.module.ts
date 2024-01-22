import { Module } from '@nestjs/common';
import { UserHasAddressService } from './user-has-address.service';
import { UserHasAddressController } from './user-has-address.controller';

@Module({
  controllers: [UserHasAddressController],
  providers: [UserHasAddressService],
})
export class UserHasAddressModule {}
