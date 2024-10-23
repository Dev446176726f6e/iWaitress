import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderItemDocument = HydratedDocument<OrderItem>;

@Schema({ timestamps: true })
export class OrderItem {
  @Prop({ required: true })
  menu_item_id: string;

  @Prop({ required: true })
  order_id: string;

  @Prop({ required: true, default: 1 })
  quantity: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
