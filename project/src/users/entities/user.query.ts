import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserQuery {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public find(where = null, relations = []): Promise<User[]> {
    try {
      return this.userRepository.find({ where, relations });
    } catch (error) {
      console.error(error); // Log the error for debugging
      throw new InternalServerErrorException(); // Handle unexpected errors
    }
  }

  public findOne(where, relations = []): Promise<User> {
    try {
      return this.userRepository.findOne({ where, relations });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async upsert(body): Promise<User> {
    try {
      const object = body.id ? await this.findOne({ id: body.id }) : new User();
      Object.assign(object, body);
      return await this.userRepository.save(object);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<User> {
    try {
      return await this.userRepository.softRemove({ id });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
