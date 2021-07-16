import { IsInt, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Colornames } from '../entities/colorname.entity';
export class CreateColornamesDto extends Colornames {
  @IsInt()
  id!: number;

  @IsString()
  hex!: string;

  @IsString()
  name!: string;
}
