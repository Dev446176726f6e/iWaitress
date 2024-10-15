import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  name: string;
  category_id: string;
  social_media_links: string[];
  phone_number: string;
  address: string;
  location: string;
  website_url: string;
  rating: number;
  working_time_id: string;
  status: string;
  //  media_id: string // don't know whether to put it or not.
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
