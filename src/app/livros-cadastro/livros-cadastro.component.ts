import { element } from 'protractor';
import { Livro, Autor } from './../core/model';
import { SelectItem } from 'primeng/primeng';
import { AutorService } from './../autor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LivrosService } from '../livros.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {

  autores = [];
  autoresSelecionados: SelectItem[];
  livro = new Livro();

  constructor(private autorService: AutorService,
    private livroService: LivrosService){}

  ngOnInit()
  {
    // this.carregarAutores();
  }

  carregarAutores() {
    return this.autorService.listarAutores()
      .then(autores => {
        this.autores = autores
          .map(c => ({ label: c.nome, value: c.id }));
      })
      .catch(erro => console.log(erro));
  }

  cadastrar(form: FormControl){
    console.log(form)
    this.livro.isbn = form.value.isbn;
    this.livro.titulo = form.value.titulo;
    this.livro.editora = form.value.editora;
    this.livro.dataDePublicacao = form.value.dataDePublicacao;
    this.livro.preco = form.value.preco;
    //this.livro.autores = form.value.autores;

    console.log(this.livro)
    //this.livroService.adicionar(this.livro)
     // .then(() => {
      //  form.reset();
     //   this.livro = new Livro();
     // })
     // .catch(erro => console.log(erro));
  }

}
