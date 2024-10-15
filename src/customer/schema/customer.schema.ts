import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerDocument = HydratedDocument<Customer>;

export class Customer {
  full_name: string;
  phone_number: string;
  country: string;
  birthdate: Date;
  email: string;
  hashed_password: string;
  is_active: boolean;
  token: string;
  status: string; // enum
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
