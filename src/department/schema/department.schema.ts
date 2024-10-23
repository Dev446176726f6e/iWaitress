import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DepartmentDocument = HydratedDocument<Department>;

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true, unique: true, minlength: 3 })
  name: string;

  @Prop({ type: String, minlength: 3, maxlength: 300 })
  description: string;

  @Prop()
  parent_department_id: string;

  @Prop()
  manager_id: string; // here can be manager of department. which will be staff_id

  @Prop()
  contact_email: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
