import { Module } from '@nestjs/common';
import { ColornamesService } from './colornames.service';
import { ColornamesController } from './colornames.controller';

@Module({
  controllers: [ColornamesController],
  providers: [ColornamesService]
})
export class ColornamesModule {}
