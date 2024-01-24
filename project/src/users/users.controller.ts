import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { Public } from 'src/auth/setmetadata';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
// import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Public()
  // @UseInterceptors(CacheInterceptor)
  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.userService.getPaginatedUsers(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // @Public()
  @Get(':email')
  findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email); // Assuming this method exists in UserService
  }

  // @Public()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // Example of file upload (assuming Multer configuration elsewhere)
  // @Post('upload-avatar')
  // @UseInterceptors(FileInterceptor('avatar', { storage: diskStorage({ destination: './uploads/avatars' }) }))
  // uploadAvatar(@UploadedFile() avatar: Express.Multer.File) {
  //   // Handle file upload logic here
  // }
}
