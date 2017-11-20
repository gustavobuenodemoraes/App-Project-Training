import { apiUrl } from './app.pi';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      console.log(headers);
      this.http.post(`${apiUrl}login`, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err));
    });
  }

  registerAluno(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(`${apiUrl}cadastroAluno`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err))
    })
  }

  registerProfessor(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json')
      this.http.post(`${apiUrl}cadastroProfessor`, JSON.stringify(data), { headers: headers })
        .subscribe(res => resolve(res.json())
        , err => reject(err));
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.clear();
    });
  }

}