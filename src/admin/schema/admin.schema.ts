import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdminDocument = HydratedDocument<Admin>;

export class Admin {
  full_name: string;
  username: string;
  hashed_password: string;
  token: string;
  role: string; //json or object
  is_active: boolean;
  is_creator: boolean;
  status: string; // enum
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
