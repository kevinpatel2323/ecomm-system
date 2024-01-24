import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CategoryQuery } from './entities/category.query';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly categoryQuery: CategoryQuery,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryQuery.find();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryQuery.findOne({ id });
  }

  async create(categoryData: Partial<Category>): Promise<Category> {
    return this.categoryQuery.upsert(categoryData);
  }

  async update(id: number, categoryData: Partial<Category>): Promise<Category> {
    return this.categoryQuery.upsert({ id, ...categoryData });
  }

  async remove(id: number): Promise<Category> {
    return this.categoryQuery.remove(id);
  }
}
