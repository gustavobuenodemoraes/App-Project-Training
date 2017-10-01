import { LocalService } from './../../../../providers/local/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroExerciciosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro-exercicios',
  templateUrl: 'cadastro-exercicios.html',
})
export class CadastroExerciciosPage {
  exercicio: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private localservice: LocalService) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.localservice.mostraExercicio(this.id)
    .subscribe(resultado => this.exercicio = resultado)
  }
}
