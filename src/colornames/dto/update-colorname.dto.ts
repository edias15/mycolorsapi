import { PartialType } from '@nestjs/mapped-types';
import { CreateColornamesDto } from './create-colorname.dto';

export class UpdateColornamesDto extends PartialType(CreateColornamesDto) {}
