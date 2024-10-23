import { Injectable } from "@nestjs/common";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Language } from "./schema/language.schema";
import { Model } from "mongoose";

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language.name) private languageModel: Model<Language>
  ) {}

  async create(createLanguageDto: CreateLanguageDto) {
    const new_lang = await this.languageModel.create(createLanguageDto);
    return new_lang;
  }

  findAll() {
    return this.languageModel.find();
  }

  findOne(id: string) {
    return this.languageModel.findOne({ _id: id });
  }

  async update(id: string, updateLanguageDto: UpdateLanguageDto) {
    const updated_lang = await this.languageModel.findByIdAndUpdate(
      id,
      updateLanguageDto,
      { returnDocument: "after" }
    );
    return updated_lang;
  }

  remove(id: string) {
    return this.languageModel.findByIdAndDelete(id);
  }
}
