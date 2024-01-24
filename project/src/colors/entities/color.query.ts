import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Color } from './color.entity';

@Injectable()
export class ColorQuery {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  public find(where = null, relations = []): Promise<Color[]> {
    try {
      return this.colorRepository.find({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public findOne(where, relations = []): Promise<Color> {
    try {
      return this.colorRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<Color> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new Color();
      Object.assign(object, body);
      return await this.colorRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<Color> {
    try {
      return await this.colorRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
