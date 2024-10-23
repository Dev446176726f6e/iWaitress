import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, minlength: 1, maxlength: 300 })
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    justOne: false,
  }) // there also must be justOne option.
  parent_category_id: string;

  @Prop({ enum: ["Menu", "Menu-Item", "Media"] })
  category_type: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
