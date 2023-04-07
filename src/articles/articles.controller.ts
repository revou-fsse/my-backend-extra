import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";

import { ArticlesService } from "./articles.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get("drafts")
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.articlesService.findOne(id);
  }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Patch(":id")
  patch(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articlesService.remove(id);
  }
}
