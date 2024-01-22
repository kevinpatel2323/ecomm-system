import { PartialType } from '@nestjs/swagger';
import { CreateUserHasPaymentOptionDto } from './create-user-has-payment-option.dto';

export class UpdateUserHasPaymentOptionDto extends PartialType(
  CreateUserHasPaymentOptionDto,
) {}
