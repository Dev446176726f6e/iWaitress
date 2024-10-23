import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Payment } from "./schema/payment.schema";
import { Model } from "mongoose";

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const new_payment = await this.paymentModel.create(createPaymentDto);
    return new_payment;
  }

  findAll() {
    return this.paymentModel.find();
  }

  findOne(id: string) {
    return this.paymentModel.findOne({ _id: id });
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    const updated_payment = await this.paymentModel.findByIdAndUpdate(
      id,
      updatePaymentDto,
      { returnDocument: "after" }
    );
    return updated_payment;
  }

  remove(id: string) {
    return this.paymentModel.findByIdAndDelete(id);
  }
}
