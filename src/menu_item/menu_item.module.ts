import { Module } from "@nestjs/common";
import { MenuItemService } from "./menu_item.service";
import { MenuItemController } from "./menu_item.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MenuItem, MenuItemSchema } from "./schema/menu_item.schema";
import { Menu, MenuSchema } from "../menu/schema/menu.schema";
import { Media, MediaSchema } from "../media/schema/media.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MenuItem.name, schema: MenuItemSchema },
      { name: Menu.name, schema: MenuSchema },
      { name: Media.name, schema: MediaSchema },
    ]),
  ],
  controllers: [MenuItemController],
  providers: [MenuItemService],
})
export class MenuItemModule {}
