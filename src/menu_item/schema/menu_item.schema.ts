import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, SchemaType, SchemaTypes } from "mongoose";
import { Menu } from "../../menu/schema/menu.schema";
import { Media } from "../../media/schema/media.schema";

export type MenuItemDocument = HydratedDocument<MenuItem>;

@Schema()
export class MenuItem {
  @Prop({ type: SchemaTypes.ObjectId, ref: "Menu" })
  menu_id: Menu;

  @Prop()
  name: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: "Media" })
  media_id: Media;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  is_available: string;

  @Prop()
  is_active: boolean;
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
