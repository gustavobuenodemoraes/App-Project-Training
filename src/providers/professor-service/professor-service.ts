import { apiUrl } from './../auth-service/app.pi';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfessorServiceProvider {

  constructor(public http: Http) {
  }

  listarAlunosDoProfessor() : Observable<Response[]>{
        let headers = new Headers();
        headers.append('Authentication', localStorage.getItem('token'));

         return this.http.get(`${apiUrl}professor/${localStorage.getItem('codUsuarioLogado')}`, new RequestOptions({headers : headers}))
        .map(resultado => resultado.json());
  }

  mostrarAlunoProfessor(codigo: any): Observable<any> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}aluno/${codigo}`, new RequestOptions({ headers: headers }))
      .map(resultado => resultado.json());
  }

  mostrarProfessor(codigo: any){
    
  }
}
