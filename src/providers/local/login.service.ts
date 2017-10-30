import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { MEAT_API } from './localapp.pi';

@Injectable()
export class LocalService {

    constructor(private http: Http) { }

    listaUsuarios(): Observable<any[]> {

        return this.http.get(`${MEAT_API}/usuarios`)
            .map(resultado => resultado.json())
    }

    mostraUsuario(id: any): Observable<any> {
        return this.http.get(`${MEAT_API}/usuarios/${id}`)
            .map(resultado => resultado.json())
    }

    listaExercicios(): Observable<any[]> {
        return this.http.get(`${MEAT_API}/exercicios`)
            .map(resultado => resultado.json())
    }

    mostraExercicio(id: any): Observable<any> {
        return this.http.get(`${MEAT_API}/exercicios/${id}`)
            .map(resultado => resultado.json())
    }

    listarTreinamentos(): Observable<any[]> {
        return this.http.get(`${MEAT_API}/treinamentos`)
            .map(resultado => resultado.json())
    }

    mostraTreinamento(id: any): Observable<any> {
        return this.http.get(`${MEAT_API}/treinamentos/${id}`)
            .map(resultado => resultado.json())
    }

    listarProfessores():Observable<Response[]> {
        return this.http.get(`${MEAT_API}/professores`)
            .map(resultado => resultado.json());
    }

    mostrarProfessor(id: any): Observable<any> {
        return this.http.get(`${MEAT_API}/professores/${id}`)
            .map(resultado => resultado.json())
    }

    mostrarExercicioAluno(id: any): Observable<any> {
        return this.http.get(`${MEAT_API}/exercicios/${id}`)
            .map(resultado => resultado.json())
    }

    mostrarTreinamentosAluno(): Observable<any> {
        return this.http.get(`${MEAT_API}/treinamentos`)
            .map(resultado => resultado.json())
    }
}