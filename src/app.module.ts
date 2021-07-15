import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColornamesModule } from './colornames/colornames.module';

@Module({
  imports: [ColornamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
