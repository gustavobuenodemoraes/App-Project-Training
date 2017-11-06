import { AlunoPerfilDoProfessorPage } from './../aluno-perfil-professor/aluno-perfil-professor';
import { AlunoTreinamentoPage } from './../aluno-treinamento/aluno-treinamento';
import { AlunoSelecaoPage } from './../aluno-selecao/aluno-selecao';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { LoginPage } from '../../login/login';
import { AlunoConfiguracaoPage } from '../aluno-configuracao/aluno-configuracao';

@IonicPage()
@Component({
  selector: 'page-aluno-menu-lateral',
  templateUrl: 'aluno-menu-lateral.html',
})
export class AlunoMenuLateralPage {

  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any;

  nomeUsuario: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onConfiguracao(): void {
    this.navCtrl.push(AlunoConfiguracaoPage);
  }


  onProfessor(): void {
    this.navCtrl.push(AlunoPerfilDoProfessorPage);
  }

  sair(): void {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    this.nomeUsuario = localStorage.getItem('nomeUsuarioLogado');
    let condicao = false;
    /*Colocar o status*/

    this.rootPage = (this.newFunction(condicao)) ? AlunoSelecaoPage : AlunoTreinamentoPage;

  }
  private newFunction(condicao: boolean) {
    return condicao == true;
  }
}
