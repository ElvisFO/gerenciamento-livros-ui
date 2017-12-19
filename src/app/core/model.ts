export class Autor {
  id: number;
}

export class Livro {
  isbn: number;
  titulo: string;
  editora: string;
  dataDePublicacao: Date;
  preco: number;
  criticas: Array<String>;
  autores: Array<Autor>;
}
