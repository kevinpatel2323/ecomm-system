import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserQuery } from './entities/user.query';
import { SearchDto } from './dto/search.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userQuery: UserQuery) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userWithHashedPassword = {
      ...createUserDto,
      password: hashedPassword,
    };
    return this.userQuery.upsert(userWithHashedPassword);
  }

  findAll(SearchUserDto: SearchDto) {
    return this.userQuery.find(SearchUserDto);
  }

  findOne(id: number) {
    // return this.userQuery.findOne({
    //   where: { id: id },
    //   // relations:["profile","profile.file"]
    // });
    // console.log("Id in service File",typeof(id))
    return this.userQuery.findOne({ id: id });
  }
  // findByEmail(email: string) {
  //   return this.userQuery.findByEmail({ email: email });
  // }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userQuery.upsert({ id: id, ...updateUserDto });
  }

  remove(id: number) {
    return this.userQuery.remove(id);
  }

  // changePassword(userId: number, changePasswordDto: changePasswordDto) {
  //   return this.userQuery.changePassword(userId, changePasswordDto);
  // }
}
