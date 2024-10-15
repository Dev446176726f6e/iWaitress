import { SchemaFactory } from "@nestjs/mongoose";
import { Date, HydratedDocument } from "mongoose";

export type StaffDocument = HydratedDocument<Staff>;

export class Staff {
  category_id: string;
  restaurant_id: string;
  full_name: string;
  email: string;
  phone_number: string;
  hire_date: Date; // or i can assign string.
  //   roles: string; // json or object.
  department_id: string; // it has its own table.
  role_id: string; // different table with many to many relation.
  work_times_id: string; // or objectId
  is_active: boolean;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
