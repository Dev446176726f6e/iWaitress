import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Category } from "./schema/category.schema";
import { Model } from "mongoose";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const new_category = await this.categoryModel.create(createCategoryDto);
    return new_category;
  }

  findAll() {
    return this.categoryModel.find();
  }

  findOne(id: string) {
    return this.categoryModel.findOne({ _id: id });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      returnDocument: "after",
    });
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
