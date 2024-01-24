import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserHasPaymentOptions } from './user_has_payment_option.entity';

@Injectable()
export class UserHasPaymentOptionsQuery {
  constructor(
    @InjectRepository(UserHasPaymentOptions)
    private readonly userHasPaymentOptionsRepository: Repository<UserHasPaymentOptions>,
  ) {}

  public find(where = null, relations = []): Promise<UserHasPaymentOptions[]> {
    try {
      return this.userHasPaymentOptionsRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<UserHasPaymentOptions> {
    try {
      return this.userHasPaymentOptionsRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<UserHasPaymentOptions> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new UserHasPaymentOptions();
      Object.assign(object, body);
      return await this.userHasPaymentOptionsRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<UserHasPaymentOptions> {
    try {
      return await this.userHasPaymentOptionsRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
