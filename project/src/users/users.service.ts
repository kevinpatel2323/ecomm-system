import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserQuery } from './entities/user.query'; // Assuming this is a custom query builder
import * as bcrypt from 'bcrypt'; // Import bcrypt

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly userQuery: UserQuery,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
    createUserDto.password = hashedPassword;

    return this.userQuery.upsert(createUserDto);
  }

  async getPaginatedUsers(page: number, limit: number): Promise<any> {
    const [users, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { users, total };
  }

  findOne(id: number) {
    return this.userQuery.findOne({ id: id });
  }

  findOneByEmail(email: string) {
    return this.userQuery.findOne({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userQuery.upsert({ id: id, ...updateUserDto });
  }

  remove(id: number) {
    return this.userQuery.remove(id);
  }
}
