import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasAddresses } from './entities/user_has_address.entity';
import { UserHasAddressesController } from './user_has_addresses.controller';
import { UserHasAddressesService } from './user_has_addresses.service';
import { UserHasAddressesQuery } from './entities/user_has_address.query';

@Module({
  imports: [TypeOrmModule.forFeature([UserHasAddresses])],
  controllers: [UserHasAddressesController],
  providers: [UserHasAddressesService, UserHasAddressesQuery],
  exports: [UserHasAddressesService],
})
export class UserHasAddressesModule {}
