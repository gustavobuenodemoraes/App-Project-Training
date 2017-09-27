import { LocalService } from './../../../../providers/local/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroTreinamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro-treinamento',
  templateUrl: 'cadastro-treinamento.html',
})
export class CadastroTreinamentoPage {
  treinamento: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localService: LocalService) {
    this.id = navParams.get('id');
  }

  ngOnInit() {
    this.localService.mostraTreinamento(this.id)
      .subscribe(resposta => this.treinamento = resposta);
  }
}
