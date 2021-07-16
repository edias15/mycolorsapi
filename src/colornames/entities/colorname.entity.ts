import { Prisma } from '@prisma/client';

export class Colornames implements Prisma.ColornamesUncheckedCreateInput {
  id?: number;
  hex!: string;
  name?: string;
}