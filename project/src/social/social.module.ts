import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Social } from './entities/social.entity';
import { SocialController } from './social.controller';
import { SocialService } from './social.service';
import { SocialQuery } from './entities/social.query';

@Module({
  imports: [TypeOrmModule.forFeature([Social])],
  controllers: [SocialController],
  providers: [SocialService, SocialQuery],
  exports: [SocialService],
})
export class SocialModule {}
