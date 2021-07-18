import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { response } from 'express';
import { ColornamesService } from './colornames.service';
import { CreateColornamesDto } from './dto/create-colorname.dto';
import { UpdateColornamesDto } from './dto/update-colorname.dto';
@Controller('colornames')
export class ColornamesController {
  constructor(private readonly colornamesService: ColornamesService) { }

  @Post()
  create(@Body() createColornamesDto: CreateColornamesDto, @Res() response: any) {
    this.colornamesService.create(createColornamesDto)
      .then(colornames => {
        response.status(201).json(colornames)
      })
      .catch(err => {
        response.status(500).json(err)
      })
  }

  @Get(':hex')
  findOne(@Param('hex') hex: string) {
    return this.colornamesService.findOne(hex);
  }
  
  @Get()
  async findAll() {
    return this.colornamesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColornameDto: UpdateColornamesDto) {
    return this.colornamesService.update(+id, updateColornameDto);
  }

  @Delete(':hex')
  remove(@Res() res: any, @Param('hex') hex: string) {
    this.colornamesService.remove(hex)
      .then((resp: any) => {
        res.status(HttpStatus.OK).json(resp)
      })
      .catch(err => {
        res.status(HttpStatus.FORBIDDEN).json(err)
      })
  }
}

