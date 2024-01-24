import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserHasProducts } from './user_has_product.entity';

@Injectable()
export class UserHasProductsQuery {
  constructor(
    @InjectRepository(UserHasProducts)
    private readonly userHasProductsRepository: Repository<UserHasProducts>,
  ) {}

  public find(where = null, relations = []): Promise<UserHasProducts[]> {
    try {
      return this.userHasProductsRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<UserHasProducts> {
    try {
      return this.userHasProductsRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<UserHasProducts> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new UserHasProducts();
      Object.assign(object, body);
      return await this.userHasProductsRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<UserHasProducts> {
    try {
      return await this.userHasProductsRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
