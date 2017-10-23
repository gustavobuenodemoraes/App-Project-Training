import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlunoPerfilProfessorPage } from './aluno-perfil-professor/aluno-perfil-professor';

@IonicPage()
@Component({
  selector: 'page-aluno-selecao',
  templateUrl: 'aluno-selecao.html',
})
export class AlunoSelecaoPage {
  // numero de estrelas do professor

  stars: Array<number> = [1, 2, 3, 4, 5];

  professores: Array<any>;

  // pode retirar o localservide
  constructor(public navCtrl: NavController, public navParams: NavParams, private localService: LocalService) {
  }

  selecionaProfessor(professor): void {
    alert(professor);
    this.navCtrl.push(AlunoPerfilProfessorPage, { codigo: professor });
  }

  ionViewDidLoad() {
    this.localService.listarProfessores()
      .subscribe(resultado => this.professores = resultado);
  }
}
