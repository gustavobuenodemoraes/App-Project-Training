import { Observable } from 'rxjs/Observable';
import { apiUrl } from './../auth-service/app.pi';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TreinamentoServiceProvider {

  constructor(public http: Http) {
  }

  salvarTreinamentos(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authentication', localStorage.getItem('token'));

      this.http.post(`${apiUrl}Treinamento/${localStorage.getItem('codUsuarioLogado')}`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err))
    })
  }

  salvarOrdemTreinos(codTreinamento, data){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authentication', localStorage.getItem('token'));

      this.http.post(`${apiUrl}ordemTreino/${codTreinamento}`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err))
    })
  }

    listarTreinamentosDoProfessor() : Observable<Response[]>{
        let headers = new Headers();
        headers.append('Authentication', localStorage.getItem('token'));

         return this.http.get(`${apiUrl}Treinamento/${localStorage.getItem('codUsuarioLogado')}`, new RequestOptions({headers : headers}))
        .map(resultado => resultado.json());
  }

  listarOrdemDeTreinamentosExercicios(codigo): Observable<Response[]>{
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}ordemTreino/treinamento/${codigo}`, new RequestOptions({headers : headers}))
    .map(resultado => resultado.json());
  }

  listarExerciciosDoTreinamento(codigo): Observable<Response[]>{
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}ordemTreino/treinamento/exercicio/${codigo}`, new RequestOptions({headers : headers}))
    .map(resultado => resultado.json());
  }

}
