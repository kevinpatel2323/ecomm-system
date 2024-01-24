import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';
import { MediaQuery } from './entities/media.query';
import { CreateMediaDto } from './dto/create-media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
    private readonly mediaQuery: MediaQuery,
  ) {}

  findAll(): Promise<Media[]> {
    return this.mediaQuery.find();
  }

  findOne(id: number): Promise<Media> {
    return this.mediaQuery.findOne({ id });
  }

  create(createMediaDto: CreateMediaDto): Promise<Media> {
    return this.mediaQuery.upsert(createMediaDto);
  }

  update(id: number, updateMediaDto: CreateMediaDto): Promise<Media> {
    return this.mediaQuery.upsert({ id, ...updateMediaDto });
  }

  remove(id: number): Promise<Media> {
    return this.mediaQuery.remove(id);
  }
}
