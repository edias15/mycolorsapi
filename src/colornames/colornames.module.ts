import { Module } from '@nestjs/common';
import { ColornamesService } from './colornames.service';
import { ColornamesController } from './colornames.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ColornamesController],
  providers: [ColornamesService, PrismaService],
})
export class ColornamesModule {}
