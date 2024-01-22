import { Injectable } from '@nestjs/common';
import { CreateUserHasAddressDto } from './dto/create-user-has-address.dto';
import { UpdateUserHasAddressDto } from './dto/update-user-has-address.dto';

@Injectable()
export class UserHasAddressService {
  create(createUserHasAddressDto: CreateUserHasAddressDto) {
    return 'This action adds a new userHasAddress';
  }

  findAll() {
    return `This action returns all userHasAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHasAddress`;
  }

  update(id: number, updateUserHasAddressDto: UpdateUserHasAddressDto) {
    return `This action updates a #${id} userHasAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHasAddress`;
  }
}
