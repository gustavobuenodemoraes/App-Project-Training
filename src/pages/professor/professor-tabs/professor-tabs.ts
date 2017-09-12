import { AlunosPage } from '../alunos/alunos';
import { ExerciciosPage } from '../exercicios/exercicios';
import { TreinamentosPage } from '../treinamentos/treinamentos';
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

  tab1Root: any = AlunosPage;
  tab2Root: any = ExerciciosPage;
  tab3Root: any = TreinamentosPage;


  constructor(public navCtrl: NavController) { }

}
