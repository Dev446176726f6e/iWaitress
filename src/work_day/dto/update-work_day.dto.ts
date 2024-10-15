import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkDayDto } from './create-work_day.dto';

export class UpdateWorkDayDto extends PartialType(CreateWorkDayDto) {}
