import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type WorkDayDocument = HydratedDocument<WorkDay>;

export class WorkDay {
  staff_id: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export const WorkDaySchema = SchemaFactory.createForClass(WorkDay);
