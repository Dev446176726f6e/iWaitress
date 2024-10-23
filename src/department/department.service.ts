import { Injectable } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Department } from "./schema/department.schema";
import { Model } from "mongoose";

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name) private departmentModel: Model<Department>
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const new_department =
      await this.departmentModel.create(createDepartmentDto);
    return new_department;
  }

  findAll() {
    return this.departmentModel.find();
  }

  findOne(id: string) {
    return this.departmentModel.findOne({ _id: id });
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const updated_department = await this.departmentModel.findByIdAndUpdate(
      id,
      updateDepartmentDto,
      { returnDocument: "after" }
    );
    return updated_department;
  }

  remove(id: string) {
    return this.departmentModel.findByIdAndDelete(id);
  }
}
