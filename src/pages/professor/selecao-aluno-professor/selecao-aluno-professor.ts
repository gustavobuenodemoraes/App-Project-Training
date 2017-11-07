import { ProfessorServiceProvider } from './../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DetalhesSelecaoAlunoProfessorPage } from './detalhes-selecao-aluno-professor/detalhes-selecao-aluno-professor';

@Component({
  selector: 'page-selecao-aluno-professor',
  templateUrl: 'selecao-aluno-professor.html',
})
export class SelecaoAlunoProfessorPage {
  alunos: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private professorService: ProfessorServiceProvider) {
  }


  detalhesAluno(dados) {
    this.navCtrl.push(DetalhesSelecaoAlunoProfessorPage, { dados: dados });
  }

  ionViewDidEnter() {
       this.professorService.listarSolicitacoesPendentes(localStorage.getItem("codUsuarioLogado"))
     .subscribe(resultado => this.alunos = resultado)
  }

}
