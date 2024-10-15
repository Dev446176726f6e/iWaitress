import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderItemDocument = HydratedDocument<OrderItem>;

export class OrderItem {
  menu_item_id: string;
  order_id: string;
  quantity: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
