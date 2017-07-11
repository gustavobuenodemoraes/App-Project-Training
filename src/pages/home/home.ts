import { ProfessorPage } from './../professor/professor';
import { AlunoPage } from './../aluno/aluno';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 goToAluno(){
    this.navCtrl.push(AlunoPage);
  }

goToProfessor(){
    this.navCtrl.push(ProfessorPage);
  }

}
