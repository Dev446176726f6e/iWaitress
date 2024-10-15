import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MediaDocument = HydratedDocument<Media>;

@Schema()
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

  @Prop({ required: true })
  file_path: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
