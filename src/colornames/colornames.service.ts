import { Injectable } from '@nestjs/common';
import { CreateColornameDto } from './dto/create-colorname.dto';
import { UpdateColornameDto } from './dto/update-colorname.dto';

@Injectable()
export class ColornamesService {
  create(createColornameDto: CreateColornameDto) {
    return 'This action adds a new colorname';
  }

  findAll() {
    return `This action returns all colornames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colorname`;
  }

  update(id: number, updateColornameDto: UpdateColornameDto) {
    return `This action updates a #${id} colorname`;
  }

  remove(id: number) {
    return `This action removes a #${id} colorname`;
  }
}
