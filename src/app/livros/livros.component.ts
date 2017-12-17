import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
  livros = [
    { isbn: '1111111111', titulo: 'Livro 1', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano' },
      {isbn: '1111111111', titulo: 'Livro 2', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'},
      {isbn: '1111111111', titulo: 'Livro 3', descricao:'Livro teste', dataLancamento: new Date(2017, 5, 30),
      valor: 4.55, autor: 'Fulano'}

  ];
}
