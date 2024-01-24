import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductQuery } from './entities/product.query';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly productQuery: ProductQuery,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productQuery.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productQuery.findOne({ id });
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productQuery.upsert(createProductDto);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productQuery.upsert({ id, ...updateProductDto });
  }

  async remove(id: number): Promise<Product> {
    return this.productQuery.remove(id);
  }
}
