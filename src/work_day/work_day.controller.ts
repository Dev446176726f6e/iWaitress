import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkDayService } from './work_day.service';
import { CreateWorkDayDto } from './dto/create-work_day.dto';
import { UpdateWorkDayDto } from './dto/update-work_day.dto';

@Controller('work-day')
export class WorkDayController {
  constructor(private readonly workDayService: WorkDayService) {}

  @Post()
  create(@Body() createWorkDayDto: CreateWorkDayDto) {
    return this.workDayService.create(createWorkDayDto);
  }

  @Get()
  findAll() {
    return this.workDayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workDayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDayDto: UpdateWorkDayDto) {
    return this.workDayService.update(+id, updateWorkDayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workDayService.remove(+id);
  }
}
