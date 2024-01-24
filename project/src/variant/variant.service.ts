import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Variant } from './entities/variant.entity';
import { VariantQuery } from './entities/variant.query';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';

@Injectable()
export class VariantService {
  constructor(
    @InjectRepository(Variant)
    private readonly variantRepository: Repository<Variant>,
    private readonly variantQuery: VariantQuery,
  ) {}

  async findAll(): Promise<Variant[]> {
    return this.variantQuery.find();
  }

  async findOne(id: number): Promise<Variant> {
    return this.variantQuery.findOne({ id });
  }

  async create(createVariantDto: CreateVariantDto): Promise<Variant> {
    return this.variantQuery.upsert(createVariantDto);
  }

  async update(id: number, updateVariantDto: UpdateVariantDto): Promise<Variant> {
    return this.variantQuery.upsert({ id, ...updateVariantDto });
  }

  async remove(id: number): Promise<Variant> {
    return this.variantQuery.remove(id);
  }
}
