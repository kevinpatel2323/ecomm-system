import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryQuery } from './entities/category.query';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryQuery],
  exports: [CategoryService],
})
export class CategoryModule {}
