import { PartialType } from '@nestjs/mapped-types';
import { CreateColornameDto } from './create-colorname.dto';

export class UpdateColornameDto extends PartialType(CreateColornameDto) {}
