import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColornamesService } from './colornames.service';
import { CreateColornamesDto } from './dto/create-colorname.dto';
import { UpdateColornamesDto } from './dto/update-colorname.dto';

@Controller('colornames')
export class ColornamesController {
  constructor(private readonly colornamesService: ColornamesService) {}

  @Post()
  create(@Body() createColornamesDto: CreateColornamesDto) {
    return this.colornamesService.create(createColornamesDto);
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
  update(@Param('id') id: string, @Body() updateColornameDto: UpdateColornamesDto) {
    return this.colornamesService.update(+id, updateColornameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colornamesService.remove(+id);
  }
}
