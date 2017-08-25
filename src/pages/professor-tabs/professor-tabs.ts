import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ProfessorTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-professor-tabs',
  templateUrl: 'professor-tabs.html'
})
@IonicPage()
export class ProfessorTabsPage {

  exerciciosRoot = 'ProfessorExerciciosPage'
  treinamentosRoot = 'ProfessorTreinamentosPage'
  alunosRoot = 'ProfessorAlunosPage'


  constructor(public navCtrl: NavController) {}

}
