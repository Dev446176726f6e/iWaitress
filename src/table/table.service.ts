import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";
import { UpdateTableDto } from "./dto/update-table.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Table } from "./schema/table.schema";
import { Model } from "mongoose";
import { Restaurant } from "../restaurant/schema/restaurant.schema";

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.name) private tableModel: Model<Table>,
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>
  ) {}

  async create(createTableDto: CreateTableDto) {
    const { restaurant_id } = createTableDto;
    const restaurant = await this.restaurantModel.findById(restaurant_id);
    if (!restaurant) {
      throw new BadRequestException("No restaurant found with this ID");
    }
    const new_table = await this.tableModel.create(createTableDto);
    return new_table;
  }

  findAll() {
    return this.tableModel.find();
  }

  findOne(id: string) {
    return this.tableModel.findOne({ _id: id });
  }

  async update(id: string, updateTableDto: UpdateTableDto) {
    // what about update.?
    const updated_table = await this.tableModel.findByIdAndUpdate(
      id,
      updateTableDto,
      { returnDocument: "after" }
    );
    return updated_table;
  }

  remove(id: string) {
    return this.tableModel.findByIdAndDelete(id);
  }
}
