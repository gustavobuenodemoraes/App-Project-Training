import { apiUrl } from './../auth-service/app.pi';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlunoTreinamentoServiceProvider {

  constructor(public http: Http) {
  }

  salvarTreinamentoAluno(data, codigo) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json')
      headers.append('Authentication', localStorage.getItem('token'));
      this.http.post(`${apiUrl}alunoTreinamento/${codigo}`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err));
    });
  }

}
