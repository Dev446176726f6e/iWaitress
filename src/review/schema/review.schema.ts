import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReviewDocument = HydratedDocument<Review>;

export class Review {
  customer_id: string;
  order_id: string;
  content: string;
  rating_id: string; // whether should i keep it simple with 0-5 rating system. or separate table.
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
