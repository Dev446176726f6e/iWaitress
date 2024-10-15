import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateMenuItemDto } from "./dto/create-menu_item.dto";
import { UpdateMenuItemDto } from "./dto/update-menu_item.dto";
import { InjectModel } from "@nestjs/mongoose";
import { MenuItem } from "./schema/menu_item.schema";
import { Model } from "mongoose";
import { Menu } from "../menu/schema/menu.schema";
import { Media } from "../media/schema/media.schema";

@Injectable()
export class MenuItemService {
  constructor(
    @InjectModel(MenuItem.name) private menuitemModel: Model<MenuItem>,
    @InjectModel(Menu.name) private menuModel: Model<Menu>,
    @InjectModel(Media.name) private mediaModel: Model<Media>
  ) {}

  async create(createMenuItemDto: CreateMenuItemDto) {
    const { menu_id, media_id } = createMenuItemDto;
    // maybe, instead of id i should make with name. cause u know. mongoDB id is a bit complicated.
    const menu = await this.menuModel.findById(menu_id);
    if (!menu) {
      throw new BadRequestException("No menu with this ID");
    }

    const media = await this.mediaModel.findById(media_id);
    if (!media) {
      throw new BadRequestException("No media with this ID");
    }

    const new_menu_item = await this.menuitemModel.create(createMenuItemDto);
    return new_menu_item;
  }

  findAll() {
    // return this.menuitemModel.find().populate("menu_id", ["name", "description"]); //.populate();
    return this.menuitemModel
      .find()
      .populate({ path: "menu_id", select: "name description" }); //.populate();
  }

  findOne(id: string) {
    return this.menuitemModel
      .findOne({ _id: id })
      .populate("media_id", ["media_category", "file_name", "file_path"])
      .populate("menu_id", ["name", "description"]);
  }

  async update(id: string, updateMenuItemDto: UpdateMenuItemDto) {
    const { menu_id, media_id } = updateMenuItemDto;
    if (menu_id) {
      const menu = await this.menuModel.findById(menu_id);
      if (!menu) {
        throw new BadRequestException(
          "Can not update menu property. Menu with this ID not found"
        );
      }
    }
    if (media_id) {
      const media = await this.mediaModel.findById(media_id);
      if (!media) {
        throw new BadRequestException(
          "Can not update media property. Media with tihs ID not found"
        );
      }
    }
    const updated_menu_item = await this.menuitemModel.findByIdAndUpdate(
      id,
      updateMenuItemDto,
      { returnDocument: "after" }
    );
    return updated_menu_item;
  }

  remove(id: string) {
    return this.menuitemModel.findByIdAndDelete(id);
  }
}
