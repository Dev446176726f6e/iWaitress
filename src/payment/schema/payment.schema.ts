import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true })
export class Payment {
  @Prop({ required: true, type: String })
  client_id: string;

  @Prop({ required: true, type: String })
  order_id: string;

  @Prop({ required: true, type: Number })
  amount: number; // we have total price in order. but instead, i can add some kindof fee.

  @Prop({
    required: true,
    type: String,
    enum: [
      "Credit Card",
      "Debit Card",
      "PayPal",
      "Bank Transfer",
      "Cash",
      "Cryptocurrency",
      "Mobile Payment",
    ],
  })
  payment_method: string;

  @Prop({
    required: true,
    type: String,
    enum: ["Pending", "Completed", "Failed", "Cancelled", "Refunded"],
    default: "Pending",
  })
  payment_status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
