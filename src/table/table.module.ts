import { Module } from "@nestjs/common";
import { TableService } from "./table.service";
import { TableController } from "./table.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Table, TableSchema } from "./schema/table.schema";
import {
  Restaurant,
  RestaurantSchema,
} from "../restaurant/schema/restaurant.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Table.name, schema: TableSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}