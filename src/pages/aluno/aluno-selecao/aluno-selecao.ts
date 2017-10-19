import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the AlunoSelecaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-aluno-selecao',
  templateUrl: 'aluno-selecao.html',
})
export class AlunoSelecaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl: MenuController,) {
    this.menuCtrl.get('menu2')
    .enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoSelecaoPage');
  }

}
