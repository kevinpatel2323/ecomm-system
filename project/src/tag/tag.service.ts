import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { TagQuery } from './entities/tag.query';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    private readonly tagQuery: TagQuery,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.tagQuery.find();
  }

  async findOne(id: number): Promise<Tag> {
    return this.tagQuery.findOne({ id });
  }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagQuery.upsert(createTagDto);
  }

  async update(id: number, updateTagDto: CreateTagDto): Promise<Tag> {
    return this.tagQuery.upsert({ id, ...updateTagDto });
  }

  async remove(id: number): Promise<Tag> {
    return this.tagQuery.remove(id);
  }
}
