import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type WorkTimeDocument = HydratedDocument<WorkTime>;

export class WorkTime {
  staff_id: string;
  work_days_id: string; // table for the days this staff works.
  start_time: string; // working start time.
  end_time: string; // working end time.
  break_duration: string; // interval. break time.
  // total_hours INTERVAL GENERATED ALWAYS AS (end_time - start_time - break_duration) STORED, -- Total working hours
  //   overtime_duration: string; //
  shift_type: string; // enum: -- Day Shift, Night Shift, etc.
  total_hours: string; //
  is_weekend: boolean; // true - false.
}

export const WorkTimeSchema = SchemaFactory.createForClass(WorkTime);
