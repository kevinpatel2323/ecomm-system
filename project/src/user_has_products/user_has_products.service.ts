import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserHasProducts } from './entities/user_has_product.entity';
import { UserHasProductsQuery } from './entities/user_has_product.query';
import { CreateUserHasProductsDto } from './dto/create-user_has_product.dto';
import { UpdateUserHasProductDto } from './dto/update-user_has_product.dto';

@Injectable()
export class UserHasProductsService {
  constructor(
    @InjectRepository(UserHasProducts)
    private readonly userHasProductsRepository: Repository<UserHasProducts>,
    private readonly userHasProductsQuery: UserHasProductsQuery,
  ) {}

  async findAll(): Promise<UserHasProducts[]> {
    return this.userHasProductsQuery.find();
  }

  async findOne(id: number): Promise<UserHasProducts> {
    return this.userHasProductsQuery.findOne({ id });
  }

  async create(createUserHasProductsDto: CreateUserHasProductsDto): Promise<UserHasProducts> {
    return this.userHasProductsQuery.upsert(createUserHasProductsDto);
  }

  async update(id: number, updateUserHasProductsDto: UpdateUserHasProductDto): Promise<UserHasProducts> {
    return this.userHasProductsQuery.upsert({ id, ...updateUserHasProductsDto });
  }

  async remove(id: number): Promise<UserHasProducts> {
    return this.userHasProductsQuery.remove(id);
  }
}
