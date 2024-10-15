import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

export class Category {
  name: string;
  description: string;
  parent_category_id: string;
  category_type: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
