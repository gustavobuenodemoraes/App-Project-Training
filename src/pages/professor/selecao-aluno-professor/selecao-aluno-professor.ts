import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesSelecaoAlunoProfessorPage } from './detalhes-selecao-aluno-professor/detalhes-selecao-aluno-professor';

/**
 * Generated class for the SelecaoAlunoProfessorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-selecao-aluno-professor',
  templateUrl: 'selecao-aluno-professor.html',
})
export class SelecaoAlunoProfessorPage {
  alunos: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  detalhesAluno(codigo) {
    this.navCtrl.push(DetalhesSelecaoAlunoProfessorPage, { codigo: codigo });
  }

  ionViewDidEnter() {
    this.alunos = [
      { codigo: 1, nome: 'Pedro', status: 'pendente' },
      { codigo: 2, nome: 'José', status: 'ok' },
    ]
  }

}
