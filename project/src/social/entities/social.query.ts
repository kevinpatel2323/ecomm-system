import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Social } from './social.entity';

@Injectable()
export class SocialQuery {
  constructor(
    @InjectRepository(Social)
    private readonly socialRepository: Repository<Social>,
  ) {}

  public find(where = null, relations = []): Promise<Social[]> {
    try {
      return this.socialRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<Social> {
    try {
      return this.socialRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<Social> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new Social();
      Object.assign(object, body);
      return await this.socialRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<Social> {
    try {
      return await this.socialRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
