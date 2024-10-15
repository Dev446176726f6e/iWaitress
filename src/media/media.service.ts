import { Injectable } from "@nestjs/common";
import { CreateMediaDto } from "./dto/create-media.dto";
import { UpdateMediaDto } from "./dto/update-media.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Media } from "./schema/media.schema";
import { Model } from "mongoose";

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async create(createMediaDto: CreateMediaDto) {
    const new_media = await this.mediaModel.create(createMediaDto);
    return new_media;
  }

  findAll() {
    return this.mediaModel.find();
  }

  findOne(id: string) {
    return this.mediaModel.findOne({ _id: id });
  }

  async update(id: string, updateMediaDto: UpdateMediaDto) {
    const updated_media = await this.mediaModel.findByIdAndUpdate(
      { _id: id },
      updateMediaDto,
      { returnDocument: "after" }
    );
    return updated_media;
  }

  remove(id: string) {
    return this.mediaModel.findOneAndDelete({ _id: id });
  }
}
