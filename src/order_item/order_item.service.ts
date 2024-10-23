import { Injectable } from "@nestjs/common";
import { CreateOrderItemDto } from "./dto/create-order_item.dto";
import { UpdateOrderItemDto } from "./dto/update-order_item.dto";
import { InjectModel } from "@nestjs/mongoose";
import { OrderItem } from "./schema/order_item.schema";
import { Model } from "mongoose";

@Injectable()
export class OrderItemService {
  constructor(
    @InjectModel(OrderItem.name) private orderitemModel: Model<OrderItem>
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    const new_order_item = await this.orderitemModel.create(createOrderItemDto);
    return new_order_item;
  }

  findAll() {
    return this.orderitemModel.find();
  }

  findOne(id: string) {
    return this.orderitemModel.findOne({ _id: id });
  }

  async update(id: string, updateOrderItemDto: UpdateOrderItemDto) {
    const updated_order_item = await this.orderitemModel.findByIdAndUpdate(
      id,
      updateOrderItemDto,
      { returnDocument: "after" }
    );
    return updated_order_item;
  }

  remove(id: string) {
    return this.orderitemModel.findByIdAndDelete(id);
  }
}
