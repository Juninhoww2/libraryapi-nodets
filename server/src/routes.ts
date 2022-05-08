import express from 'express';
import { PrismaObrasRepository } from './repositories/prisma/prisma-obras-repository';
import { SubmitObraUseCase } from './use-cases/submit-obras-use-case';

export const routes = express.Router();

routes.post('/obras', async (req, res) => {
  const { titulo, editora, autores, photo } = req.body;

  try {
    const prismaObrasRepository = new PrismaObrasRepository();

    const submitObraUseCase = new SubmitObraUseCase(
      prismaObrasRepository,
    );

    await submitObraUseCase.execute({
      titulo,
      editora,
      autores,
      photo,
    });

    return res.status(201).send();
  } catch (err) {
    console.log(err);

    return res.status(500).send();
  }
});