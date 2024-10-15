import { Module } from "@nestjs/common";
import { WorkDayService } from "./work_day.service";
import { WorkDayController } from "./work_day.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { WorkDay, WorkDaySchema } from "./schema/work_day.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WorkDay.name, schema: WorkDaySchema }]),
  ],
  controllers: [WorkDayController],
  providers: [WorkDayService],
})
export class WorkDayModule {}
