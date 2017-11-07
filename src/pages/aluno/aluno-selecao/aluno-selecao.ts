import { ProfessorServiceProvider } from './../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlunoPerfilProfessorPage } from './aluno-perfil-professor/aluno-perfil-professor';

@Component({
  selector: 'page-aluno-selecao',
  templateUrl: 'aluno-selecao.html',
})
export class AlunoSelecaoPage {
  // numero de estrelas do professor

  stars: Array<number> = [1, 2, 3, 4, 5];

  professores: Array<any>;

  // pode retirar o localservide
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private professorService: ProfessorServiceProvider) {
  }

  selecionaProfessor(professor): void {
    this.navCtrl.push(AlunoPerfilProfessorPage, { codigo: professor });
  }

  ionViewDidLoad() {
    this.professorService.listarProfessores()
      .subscribe(resultado => this.professores = resultado);
  }
}
