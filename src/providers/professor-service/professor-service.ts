import { apiUrl } from './../auth-service/app.pi';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfessorServiceProvider {

  constructor(public http: Http) {
  }

  listarAlunosDoProfessor(): Observable<Response[]> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}professor/${localStorage.getItem('codUsuarioLogado')}`, new RequestOptions({ headers: headers }))
      .map(resultado => resultado.json());
  }

  mostrarAlunoProfessor(codigo: any): Observable<any> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}aluno/${codigo}`, new RequestOptions({ headers: headers }))
      .map(resultado => resultado.json());
  }

  mostrarProfessor(codigo: any): Observable<any> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('token'));

    return this.http.get(`${apiUrl}professor/find/${codigo}`, new RequestOptions({ headers: headers }))
      .map(resultado => resultado.json());
  }

  salvarProfessor(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json')
      headers.append('Authentication', localStorage.getItem('token'));
      this.http.post(`${apiUrl}professor`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err));
    });
  }
}
