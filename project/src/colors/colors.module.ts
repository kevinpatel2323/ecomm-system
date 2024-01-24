import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorController } from './colors.controller'; // Assuming you'll create a controller
import { Color } from './entities/color.entity';
import { ColorService } from './colors.service';
import { ColorQuery } from './entities/color.query';

@Module({
  imports: [
    TypeOrmModule.forFeature([Color]),
  ],
  controllers: [ColorController],
  providers: [ColorService, ColorQuery],
  exports: [ColorService],
})
export class ColorModule {}
