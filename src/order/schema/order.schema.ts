import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: String, required: true })
  restaurant_id: string;

  @Prop({ type: String, required: true })
  client_id: string;

  @Prop({ type: String, required: true })
  table_id: string;

  @Prop({ type: Number })
  total_amount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
