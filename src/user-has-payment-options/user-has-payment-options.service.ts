import { Injectable } from '@nestjs/common';
import { CreateUserHasPaymentOptionDto } from './dto/create-user-has-payment-option.dto';
import { UpdateUserHasPaymentOptionDto } from './dto/update-user-has-payment-option.dto';

@Injectable()
export class UserHasPaymentOptionsService {
  create(createUserHasPaymentOptionDto: CreateUserHasPaymentOptionDto) {
    return 'This action adds a new userHasPaymentOption';
  }

  findAll() {
    return `This action returns all userHasPaymentOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHasPaymentOption`;
  }

  update(
    id: number,
    updateUserHasPaymentOptionDto: UpdateUserHasPaymentOptionDto,
  ) {
    return `This action updates a #${id} userHasPaymentOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHasPaymentOption`;
  }
}
