import { Injectable } from "@nestjs/common";
import { CreateMenuDto } from "./dto/create-menu.dto";
import { UpdateMenuDto } from "./dto/update-menu.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Menu } from "./schema/menu.schema";
import { Model } from "mongoose";

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<Menu>) {}

  async create(createMenuDto: CreateMenuDto) {
    const new_menu = await this.menuModel.create(createMenuDto);
    return new_menu;
  }

  findAll() {
    return this.menuModel.find();
  }

  findOne(id: string) {
    return this.menuModel.findOne({ _id: id });
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    const updated_menu = await this.menuModel.findByIdAndUpdate(
      { _id: id },
      updateMenuDto,
      { returnDocument: "after" }
    );
    return updated_menu;
  }

  remove(id: string) {
    return this.menuModel.findByIdAndDelete(id);
  }
}
