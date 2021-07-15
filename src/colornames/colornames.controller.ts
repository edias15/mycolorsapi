import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColornamesService } from './colornames.service';
import { CreateColornameDto } from './dto/create-colorname.dto';
import { UpdateColornameDto } from './dto/update-colorname.dto';

@Controller('colornames')
export class ColornamesController {
  constructor(private readonly colornamesService: ColornamesService) {}

  @Post()
  create(@Body() createColornameDto: CreateColornameDto) {
    return this.colornamesService.create(createColornameDto);
  }

  @Get()
  findAll() {
    return this.colornamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colornamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColornameDto: UpdateColornameDto) {
    return this.colornamesService.update(+id, updateColornameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colornamesService.remove(+id);
  }
}
