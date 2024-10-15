import { Injectable } from '@nestjs/common';
import { CreateWorkDayDto } from './dto/create-work_day.dto';
import { UpdateWorkDayDto } from './dto/update-work_day.dto';

@Injectable()
export class WorkDayService {
  create(createWorkDayDto: CreateWorkDayDto) {
    return 'This action adds a new workDay';
  }

  findAll() {
    return `This action returns all workDay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workDay`;
  }

  update(id: number, updateWorkDayDto: UpdateWorkDayDto) {
    return `This action updates a #${id} workDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} workDay`;
  }
}
