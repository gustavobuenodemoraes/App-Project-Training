import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlunoPerfilProfessorPage } from '../aluno-perfil-professor/aluno-perfil-professor';

@IonicPage()
@Component({
  selector: 'page-aluno-selecao',
  templateUrl: 'aluno-selecao.html',
})
export class AlunoSelecaoPage {

  professores: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.professores = [
      { codigo: 1, nome: 'Paulo' },
      { codigo: 2, nome: 'Gustavo' },
      { codigo: 8, nome: 'teste' },
    ];
  }

  selecionaProfessor(professor): void {
    alert(professor.codigo);
    this.navCtrl.push(AlunoPerfilProfessorPage, { codigo: professor.codigo });
  }

  ionViewDidLoad() {

  }

}
