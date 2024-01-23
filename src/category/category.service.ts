import { Injectable } from '@nestjs/common';
import { CategoryQuery } from './entities/category.query';
import { CreateCategoryDto } from './dto/create-category.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryQuery: CategoryQuery) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryQuery.upsert(createCategoryDto);
  }

  findAll(searchDto: SearchDto) {
    return this.categoryQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.categoryQuery.findOne({ id: id });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryQuery.upsert({ id: id, ...updateCategoryDto });
  }

  remove(id: number) {
    return this.categoryQuery.remove(id);
  }
}
