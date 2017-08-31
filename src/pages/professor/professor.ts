import { AlunosPage } from './alunos/alunos';
import { ExerciciosPage } from './exercicios/exercicios';
import { TreinamentosPage } from './treinamentos/treinamentos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html'
})
export class ProfessorPage {

  tab1Root: any = AlunosPage;
  tab2Root: any = ExerciciosPage;
  tab3Root: any = TreinamentosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
