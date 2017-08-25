import { ProfessorExercicios } from './professor-exercicios.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfessorExerciciosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-professor-exercicios',
  templateUrl: 'professor-exercicios.html',
})
export class ProfessorExerciciosPage {

  exercicios: ProfessorExercicios[] = [
    { nome: "Abdominal invertido", descricao: "deitar-se de costas em uma esteira", linkVideo: "https://www.youtube.com/watch?v=K4ogPdiqvLk" }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorExerciciosPage');
  }

}
