import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users.controller'; // Assuming you'll create a controller
import { User } from './entities/user.entity';
import { UserService } from './users.service';
import { UserQuery } from './entities/user.query';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService,UserQuery],
  exports: [UserService],
})
export class UsersModule {}
