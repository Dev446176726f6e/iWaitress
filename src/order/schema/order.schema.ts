import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

export class Order {
  restaurant_id: string;
  client_id: string;
  table_id: string;
  total_amount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
