import { LocalService } from './../../../../providers/local/login.service';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilAlunoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-aluno',
  templateUrl: 'perfil-aluno.html',
})
export class PerfilAlunoPage {
  usuario: any
  id: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private localService: LocalService) {
   this.id = navParams.get('id');
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.localService.mostraUsuario(this.id)
    .subscribe(resultado => this.usuario = resultado)
  }

}
