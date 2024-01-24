import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserHasAddresses } from '../entities/user_has_address.entity';

@Injectable()
export class UserHasAddressesQuery {
  constructor(
    @InjectRepository(UserHasAddresses)
    private readonly userHasAddressesRepository: Repository<UserHasAddresses>,
  ) {}

  public find(where = null, relations = []): Promise<UserHasAddresses[]> {
    try {
      return this.userHasAddressesRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<UserHasAddresses> {
    try {
      return this.userHasAddressesRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<UserHasAddresses> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new UserHasAddresses();
      Object.assign(object, body);
      return await this.userHasAddressesRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<UserHasAddresses> {
    try {
      return await this.userHasAddressesRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
