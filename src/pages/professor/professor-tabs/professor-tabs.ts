import { MenuController } from 'ionic-angular';
import { AlunosPage } from '../alunos/alunos';
import { ExerciciosPage } from '../exercicios/exercicios';
import { TreinamentosPage } from '../treinamentos/treinamentos';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-professor-tabs',
  templateUrl: 'professor-tabs.html'
})
@IonicPage()
export class ProfessorTabsPage {

  tab1Root: any = AlunosPage;
  tab2Root: any = ExerciciosPage;
  tab3Root: any = TreinamentosPage;


  constructor(public navCtrl: NavController, private menuCtrl: MenuController) { }
  //ativa o menu
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'menuProfessor');
  }

}
