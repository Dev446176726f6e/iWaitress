import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Order } from "./schema/order.schema";
import { Model } from "mongoose";

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(createOrderDto: CreateOrderDto) {
    const new_order = await this.orderModel.create(createOrderDto);
    return new_order;
  }

  findAll() {
    return this.orderModel.find();
  }

  findOne(id: string) {
    return this.orderModel.findOne({ _id: id });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const updated_order = await this.orderModel.findByIdAndUpdate(
      id,
      updateOrderDto,
      { returnDocument: "after" }
    );
    return updated_order;
  }

  remove(id: string) {
    return this.orderModel.findByIdAndDelete(id);
  }
}
