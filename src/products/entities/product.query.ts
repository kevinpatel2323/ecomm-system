import { Injectable, Search } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InternalServerErrorException } from "@nestjs/common";
import { Like } from "typeorm";
import { Product } from "./product.entity";
import { SearchDto } from "src/users/dto/search.dto";

@Injectable()
export class ProductQuery {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  public find(where: SearchDto, relations = []): Promise<Product[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.productRepository.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<Product> {
    try {
      return this.productRepository.findOne({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<Product> {
    try {
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new Product();
      }
      object = Object.assign(object, body);
      return await this.productRepository.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<Product> {
    try {
      return await this.productRepository.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
}
