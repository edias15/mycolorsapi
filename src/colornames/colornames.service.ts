import { Injectable } from '@nestjs/common';
import { CreateColornamesDto } from './dto/create-colorname.dto';
import { UpdateColornamesDto } from './dto/update-colorname.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ColornamesService {
  constructor(private prisma: PrismaService) { }
  
  create(createColornamesDto: CreateColornamesDto) {
    console.log('create ...', createColornamesDto)
    return this.prisma.colornames.create({
      data: { ...createColornamesDto }
    })
  }

  findAll() {
    return this.prisma.colornames.findMany();
  }

  findOne(hex: string) {
    return this.prisma.colornames.findUnique({
      where: { hex }
    });
  }

  update(id: number, updateColornamesDto: UpdateColornamesDto) {
    return `This action updates a #${id} colorname`;
  }

  remove(id: number) {
    return `This action removes a #${id} colorname`;
  }
}
