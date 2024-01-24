import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Tag } from './tag.entity';

@Injectable()
export class TagQuery {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  public find(where = null, relations = []): Promise<Tag[]> {
    try {
      return this.tagRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<Tag> {
    try {
      return this.tagRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<Tag> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new Tag();
      Object.assign(object, body);
      return await this.tagRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<Tag> {
    try {
      return await this.tagRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
