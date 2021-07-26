import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, Query } from '@nestjs/common'
import { ColornamesService } from './colornames.service'
import { CreateColornamesDto } from './dto/create-colorname.dto'
import { UpdateColornamesDto } from './dto/update-colorname.dto'
import { Colornames as ColornamesModel } from '@prisma/client'
@Controller('colornames')
export class ColornamesController {
  constructor(private readonly colornamesService: ColornamesService) { }

  @Post()
  create(@Body() createColornamesDto: CreateColornamesDto, @Res() response: any) {
    this.colornamesService.create(createColornamesDto)
      .then((colornames: any) => {
        response.status(201).json(colornames)
      })
      .catch((err: any) => {
        response.status(500).json(err)
      })
  }

  @Get('/:id')
  async findOne(@Param('id') _hex: string): Promise<ColornamesModel | null> {
    return this.colornamesService.findOne(_hex)
  }
  
  @Get()
  async findAll() {
    return this.colornamesService.findAll();
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateColornameDto: UpdateColornamesDto) {
    return this.colornamesService.update(+id, updateColornameDto);
  }

  @Delete('/:hex')
  remove(@Res() res: any, @Param('hex') hex: string) {
    this.colornamesService.remove(hex)
      .then((resp: any) => {
        res.status(HttpStatus.OK).json(resp)
      })
      .catch((err: any) => {
        res.status(HttpStatus.FORBIDDEN).json(err)
      })
  }
}
