import { Injectable } from '@nestjs/common';
import { CreateColornamesDto } from './dto/create-colorname.dto'
import { UpdateColornamesDto } from './dto/update-colorname.dto'
import { PrismaService } from '../prisma/prisma.service'
import {
  Colornames,
  Prisma
} from '@prisma/client'

@Injectable()
export class ColornamesService {
  constructor(private prisma: PrismaService) { }
  
  async colorname(colornameWhereUniqueInput: Prisma.ColornamesWhereUniqueInput): Promise<Colornames | null> {
    return this.prisma.colornames.findUnique({
      where: colornameWhereUniqueInput
    })
  }

  async colornames(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ColornamesWhereUniqueInput;
    where?: Prisma.ColornamesWhereInput;
    orderBy?: Prisma.ColornamesOrderByInput;
  }): Promise<Colornames[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.colornames.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  create(createColornamesDto: CreateColornamesDto) {
    return this.prisma.colornames.create({
      data: { ...createColornamesDto }
    })
  }

  findOne(_hex: string) {
    return this.prisma.colornames.findFirst ({
      where: {
        hex: `#${_hex}`
      }
    });
  }

  findAll() {
    return this.prisma.colornames.findMany();
  }

  update(id: number, updateColornamesDto: UpdateColornamesDto) {
    return `This action updates a #${id} colorname`;
  }

  remove(hex: string) {
    return this.prisma.colornames.delete({
      where: { hex }
    })
  }
}
