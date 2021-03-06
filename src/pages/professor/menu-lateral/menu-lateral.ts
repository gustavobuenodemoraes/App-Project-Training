import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import {  Nav, Platform } from 'ionic-angular';
import { ProfessorTabsPage } from '../professor-tabs/professor-tabs';
import { LoginPage } from '../../login/login';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { ConfiguracaoProfessorPage } from '../configuracao-professor/configuracao-professor';
import { SelecaoAlunoProfessorPage } from '../selecao-aluno-professor/selecao-aluno-professor';

@Component({
  selector: 'page-menu-lateral',
  templateUrl: 'menu-lateral.html',
})
export class MenuLateralPage {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = ProfessorTabsPage;

  nomeUsuario: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onConfiguracao(): void {
    this.navCtrl.push(ConfiguracaoProfessorPage);
  }

  sair(): void {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  onAluno(): void {
    this.navCtrl.push(SelecaoAlunoProfessorPage);
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    this.nomeUsuario = localStorage.getItem('nomeUsuarioLogado');
  }
}
