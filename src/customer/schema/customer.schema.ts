import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ timestamps: true })
export class Customer {
  @Prop({ type: String, required: true, minlength: 3, maxlength: 100 })
  full_name: string;

  @Prop({ type: String, required: true, unique: true })
  phone_number: string;

  @Prop({ type: String })
  country: string;

  @Prop({ type: Date })
  birthdate: Date;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  hashed_password: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop()
  token: string;

  @Prop({ enum: ["DEACTIVATED", "BANNED", "ACTIVE"], default: "PENDING" })
  status: string;

  @Prop({ type: String }) // it will be chosen language id. from language table.
  default_language: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
