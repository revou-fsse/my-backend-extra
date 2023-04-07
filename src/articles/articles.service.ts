import { Injectable } from "@nestjs/common";

import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { log } from "console";

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return "This action adds a new article";
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  async findOne(id: string) {
    const article = await this.prisma.article.findUnique({ where: { id } });
    if (!article) return {};
    return article;
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: string) {
    return `This action removes a #${id} article`;
  }
}
