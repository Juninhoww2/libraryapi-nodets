import { prisma } from "../../prisma";
import { ObrasCreateData, ObrasRepository } from "../obras-repository";

export class PrismaObrasRepository implements ObrasRepository {
  async create({ titulo, editora, autores, photo }: ObrasCreateData) {
    await prisma.obra.create({
      data: {
        editora,
        titulo,
        autores,
        photo
      },
    });
  }
}