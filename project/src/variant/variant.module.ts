import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variant } from './entities/variant.entity';
import { VariantController } from './variant.controller';
import { VariantService } from './variant.service';
import { VariantQuery } from './entities/variant.query';

@Module({
  imports: [TypeOrmModule.forFeature([Variant])],
  controllers: [VariantController],
  providers: [VariantService, VariantQuery],
  exports: [VariantService],
})
export class VariantModule {}
