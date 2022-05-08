import { ObrasRepository } from '../repositories/obras-repository';

interface SubmitObraUseCaseRequest {
    titulo: string;
    editora: string;
    autores: string;
    photo: string;
  }

export class SubmitObraUseCase {
    constructor(
      private ObraRepository: ObrasRepository,
    ) {}
    
    async execute(request: SubmitObraUseCaseRequest) {
        const { titulo, editora, autores, photo } = request;
    
    if (!titulo) {
      throw new Error('Titulo is required.');
    }

    if (!editora) {
        throw new Error('Editora is required.');
    }

    if (photo && !photo.startsWith('data:image/png;base64')) {
        throw new Error('Invalid screenshot format.');
    }

    await this.ObraRepository.create({
        titulo,
        editora,
        autores,
        photo
    });



  }
}
  