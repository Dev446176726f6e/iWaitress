import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LanguageDocument = HydratedDocument<Language>;

@Schema({ versionKey: false })
export class Language {
  @Prop({ type: String, required: true, unique: true })
  language_code: string; // like: en - ru - uz, fr

  @Prop({ type: String, required: true, unique: true })
  language_name: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
