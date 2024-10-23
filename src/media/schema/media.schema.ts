import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MediaDocument = HydratedDocument<Media>;

@Schema({ timestamps: true })
export class Media {
  @Prop({
    unique: true,
    required: true,
    type: String,
    enum: ["photo", "video"],
  })
  media_category: string;

  @Prop({ required: true })
  file_name: string;

  @Prop()
  user_id: string; // someone who uploads. whether admin, customer, or staff.

  @Prop({ required: true })
  file_path: string;

  @Prop()
  related_table: string;

  @Prop()
  related_id: string; // nimage, mo'ljallanga bo'lsa o'sha model id-isi. misol, uchun admin_id yoki restoran_id.
}

export const MediaSchema = SchemaFactory.createForClass(Media);
