
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LivrosService{


  livrosUrl = 'http://localhost:8080/livros';

  constructor(private http: Http) { }

  listarTodos(): Promise<any>{
    return this.http.get(this.livrosUrl)
    .toPromise()
    .then( response => response.json())
  }

  pesquisarPorAutor(nome: string): Promise<any>{
    const params = new URLSearchParams();
    params.set("nome", nome)
    return this.http.get(`${this.livrosUrl}/page`, { search: params})
    .toPromise()
    .then( response => response.json())
  }

}
