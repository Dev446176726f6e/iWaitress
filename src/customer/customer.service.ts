import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "./schema/customer.schema";
import { Model } from "mongoose";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    // it will be changed to signup later. or register.
    const new_customer = await this.customerModel.create(createCustomerDto);
    return new_customer;
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findOne({ _id: id });
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const updated_customer = await this.customerModel.findByIdAndUpdate(
      id,
      updateCustomerDto,
      { returnDocument: "after" }
    );
    return updated_customer;
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
