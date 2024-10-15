import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReservationDocument = HydratedDocument<Reservation>;

export class Reservation {
  client_id: string;
  reservation_date: string;
  reservation_time: string;
  guests: number; // number of people.
  table_id: string;
  special_request: string; // text. or you can consider it like comment.
  status: string; // enum
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
