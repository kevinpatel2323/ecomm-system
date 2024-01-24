import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Social } from './entities/social.entity';
import { SocialQuery } from './entities/social.query';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';

@Injectable()
export class SocialService {
  constructor(
    @InjectRepository(Social)
    private readonly socialRepository: Repository<Social>,
    private readonly socialQuery: SocialQuery,
  ) {}

  async findAll(): Promise<Social[]> {
    return this.socialQuery.find();
  }

  async findOne(id: number): Promise<Social> {
    return this.socialQuery.findOne({ id });
  }

  async create(createSocialDto: CreateSocialDto): Promise<Social> {
    return this.socialQuery.upsert(createSocialDto);
  }

  async update(id: number, updateSocialDto: UpdateSocialDto): Promise<Social> {
    return this.socialQuery.upsert({ id, ...updateSocialDto });
  }

  async remove(id: number): Promise<Social> {
    return this.socialQuery.remove(id);
  }
}
