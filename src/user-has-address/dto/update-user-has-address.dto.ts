import { PartialType } from '@nestjs/swagger';
import { CreateUserHasAddressDto } from './create-user-has-address.dto';

export class UpdateUserHasAddressDto extends PartialType(
  CreateUserHasAddressDto,
) {}
