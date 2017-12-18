import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-pesquisa',
  templateUrl: './livros-pesquisa.component.html',
  styleUrls: ['./livros-pesquisa.component.css']
})
export class LivrosPesquisaComponent implements OnInit{

  nomeAutor: string = '';
  livros = [];

  constructor(private livrosService: LivrosService){}

  ngOnInit()
  {
    this.listarTodos();
  }

  listarTodos()
  {
    this.livrosService.listarTodos()
      .then( livros => this.livros = livros);
  }

  pesquisarPorAutor()
  {
    console.log(this.nomeAutor)
    if(this.nomeAutor !== ''){
      this.livrosService.pesquisarPorAutor(this.nomeAutor)
      .then( livros => this.livros = livros);
    }else{
      this.listarTodos();
    }
  }
}
