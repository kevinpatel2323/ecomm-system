import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserHasPaymentOptions } from './entities/user_has_payment_option.entity';
import { UserHasPaymentOptionsQuery } from './entities/user_has_payment_option.query';
import { CreateUserHasPaymentOptionsDto } from './dto/create-user_has_payment_option.dto';
import { UpdateUserHasPaymentOptionDto } from './dto/update-user_has_payment_option.dto';

@Injectable()
export class UserHasPaymentOptionsService {
  constructor(
    @InjectRepository(UserHasPaymentOptions)
    private readonly userHasPaymentOptionsRepository: Repository<UserHasPaymentOptions>,
    private readonly userHasPaymentOptionsQuery: UserHasPaymentOptionsQuery,
  ) {}

  async findAll(): Promise<UserHasPaymentOptions[]> {
    return this.userHasPaymentOptionsQuery.find();
  }

  async findOne(id: number): Promise<UserHasPaymentOptions> {
    return this.userHasPaymentOptionsQuery.findOne({ id });
  }

  async create(createUserHasPaymentOptionsDto: CreateUserHasPaymentOptionsDto): Promise<UserHasPaymentOptions> {
    return this.userHasPaymentOptionsQuery.upsert(createUserHasPaymentOptionsDto);
  }

  async update(id: number, updateUserHasPaymentOptionsDto: UpdateUserHasPaymentOptionDto): Promise<UserHasPaymentOptions> {
    return this.userHasPaymentOptionsQuery.upsert({ id, ...updateUserHasPaymentOptionsDto });
  }

  async remove(id: number): Promise<UserHasPaymentOptions> {
    return this.userHasPaymentOptionsQuery.remove(id);
  }
}
