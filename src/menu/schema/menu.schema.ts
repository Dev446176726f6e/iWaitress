import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
