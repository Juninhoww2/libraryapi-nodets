export interface ObrasCreateData  {
    titulo: string;
    editora: string;
    autores: string;
    photo: string;
  }
  
  export interface ObrasRepository {
    create: (data: ObrasCreateData) => Promise<void>;
  }
