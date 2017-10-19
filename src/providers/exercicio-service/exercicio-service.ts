import { Observable } from 'rxjs/Observable';
import { apiUrl } from './../auth-service/app.pi';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExercicioServiceProvider {

  constructor(public http: Http) {
  }

  listarExercicios(): Observable<Response[]> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}exercicio/${localStorage.getItem('codUsuarioLogado')}`, new RequestOptions({ headers: headers }))
      .map(resultado => resultado.json());
  }

  findById(codigo : any): Observable<Response[]> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}exercicio/find/${codigo}`, new RequestOptions({ headers: headers }))
      .map(resultado => resultado.json());
  }

  registerExercicio(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authentication', localStorage.getItem('token'));

      this.http.post(`${apiUrl}exercicio/${localStorage.getItem('codUsuarioLogado')}`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err))
    })
  }

}
