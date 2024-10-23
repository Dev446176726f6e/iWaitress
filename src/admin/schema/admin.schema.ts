import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true, versionKey: false }) // also, i can specify customer name to it. with {collection: name}
// what is strict option is schema..? and there is also autoCreate and autoIndex.
export class Admin {
  @Prop({
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    uppercase: true,
  })
  full_name: string;

  @Prop({
    type: String,
    required: true,
    minlength: 3,
    unique: true,
    maxlength: 80,
  })
  username: string;

  @Prop()
  hashed_password: string;

  @Prop()
  token: string;

  @Prop()
  role: string; //json or object. maybe, it will be inlcuded in future versions.

  @Prop({ type: Boolean, default: true }) // just for begining after the default will be false.
  is_active: boolean;

  @Prop({ type: Boolean, default: false })
  is_creator: boolean;

  @Prop({
    enum: [
      "ACTIVE",
      "INACTIVE",
      "SUSPENDED",
      "PENDING",
      "DEACTIVATED",
      "BANNED",
    ],
    default: "PENDING", // since, when first it's waiting for him to activate his account.?
  })
  status: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
