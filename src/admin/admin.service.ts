import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Admin } from "./schema/admin.schema";
import { Model } from "mongoose";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(createAdminDto: CreateAdminDto) {
    const new_admin = await this.adminModel.create(createAdminDto);
    return new_admin;
  }

  findAll() {
    return this.adminModel.find();
  }

  findOne(id: string) {
    return this.adminModel.findOne({ _id: id });
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto, {
      returnDocument: "after",
    });
  }

  remove(id: string) {
    return this.adminModel.findByIdAndDelete(id);
  }
}
