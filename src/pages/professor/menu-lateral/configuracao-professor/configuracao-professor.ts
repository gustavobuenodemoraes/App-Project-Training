import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-configuracao-professor',
  templateUrl: 'configuracao-professor.html',
})
export class ConfiguracaoProfessorPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams, ) {
  }
}
