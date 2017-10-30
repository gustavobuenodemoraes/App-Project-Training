import { AlunoTreinamentoPage } from './../aluno-treinamento/aluno-treinamento';
import { AlunoSelecaoPage } from './../aluno-selecao/aluno-selecao';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-aluno-menu-lateral',
  templateUrl: 'aluno-menu-lateral.html',
})
export class AlunoMenuLateralPage {

  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any;

  usuario: Array<any>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onConfiguracao(): void {
    this.navCtrl.push("");
  }

  sair(): void {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    let condicao = true;
    /*Colocar o status*/
    this.rootPage = (condicao == false) ? AlunoSelecaoPage : AlunoTreinamentoPage

  }

}
