import { Module } from "@nestjs/common";
import { WorkTimeService } from "./work_time.service";
import { WorkTimeController } from "./work_time.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { WorkTime, WorkTimeSchema } from "./schema/work_time.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkTime.name, schema: WorkTimeSchema },
    ]),
  ],
  controllers: [WorkTimeController],
  providers: [WorkTimeService],
})
export class WorkTimeModule {}
