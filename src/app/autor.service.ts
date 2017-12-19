import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AutorService {

  autoresUrl = 'http://localhost:8080/autores';

  constructor(private http: Http) { }

  listarAutores(): Promise<any>{
    return this.http.get(this.autoresUrl)
    .toPromise()
    .then( response => response.json())
  }

}
