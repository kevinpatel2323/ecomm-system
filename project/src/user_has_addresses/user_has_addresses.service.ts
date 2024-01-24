import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserHasAddresses } from './entities/user_has_address.entity';
import { UserHasAddressesQuery } from './entities/user_has_address.query';
import { CreateUserHasAddressesDto } from './dto/create-user_has_address.dto';
import { UpdateUserHasAddressDto } from './dto/update-user_has_address.dto';

@Injectable()
export class UserHasAddressesService {
  constructor(
    @InjectRepository(UserHasAddresses)
    private readonly userHasAddressesRepository: Repository<UserHasAddresses>,
    private readonly userHasAddressesQuery: UserHasAddressesQuery,
  ) {}

  async findAll(): Promise<UserHasAddresses[]> {
    return this.userHasAddressesQuery.find();
  }

  async findOne(id: number): Promise<UserHasAddresses> {
    return this.userHasAddressesQuery.findOne({ id });
  }

  async create(createUserHasAddressesDto: CreateUserHasAddressesDto): Promise<UserHasAddresses> {
    return this.userHasAddressesQuery.upsert(createUserHasAddressesDto);
  }

  async update(id: number, updateUserHasAddressesDto: UpdateUserHasAddressDto): Promise<UserHasAddresses> {
    return this.userHasAddressesQuery.upsert({ id, ...updateUserHasAddressesDto });
  }

  async remove(id: number): Promise<UserHasAddresses> {
    return this.userHasAddressesQuery.remove(id);
  }
}
