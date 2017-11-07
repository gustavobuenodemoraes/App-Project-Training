import { apiUrl } from './../auth-service/app.pi';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlunoServiceProvider {

  constructor(public http: Http) {
  }

  mostrarAluno(codigo: any): Observable<any>{
        let headers = new Headers();
        headers.append('Authentication', localStorage.getItem('token'));

         return this.http.get(`${apiUrl}aluno/${codigo}`, new RequestOptions({headers : headers}))
        .map(resultado => resultado.json());
  }

  salvarAluno(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json')
      headers.append('Authentication', localStorage.getItem('token'));
      this.http.post(`${apiUrl}aluno`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err));
    });
  }

  salvarObservacaoAluno(codigo: any, observacao: any) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'text/html')
      headers.append('Authentication', localStorage.getItem('token'));
      this.http.post(`${apiUrl}aluno/observacao/${codigo}`, observacao, { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err));
    });
  }
  
}
