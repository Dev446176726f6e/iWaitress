import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PaymentDocument = HydratedDocument<Payment>;

export class Payment {
  client_id: string;
  order_id: string;
  amount: number; // we have total price in order. but instead, i can add some kindof fee.
  payment_method: string; // enum
  payment_status: string; // enum
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
