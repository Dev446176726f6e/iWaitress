import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restaurant } from "../../restaurant/schema/restaurant.schema";

export type TableDocument = HydratedDocument<Table>;

@Schema()
export class Table {
  @Prop({ type: String, required: true })
  table_number: string;

  @Prop({ type: String }) // i think it's wrong to put enum check here.
  seating_type: string;

  @Prop({ type: Number })
  seat_number: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" })
  restaurant_id: Restaurant;

  @Prop({ type: String })
  status: string;

  @Prop({ type: Boolean })
  is_reserved: boolean;
}

export const TableSchema = SchemaFactory.createForClass(Table);
