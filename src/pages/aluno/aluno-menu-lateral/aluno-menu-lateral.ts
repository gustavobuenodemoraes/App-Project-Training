import { AlunoPerfilDoProfessorPage } from './../aluno-perfil-professor/aluno-perfil-professor';
import { AlunoTreinamentoPage } from './../aluno-treinamento/aluno-treinamento';
import { AlunoSelecaoPage } from './../aluno-selecao/aluno-selecao';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { LoginPage } from '../../login/login';
import { AlunoConfiguracaoPage } from '../aluno-configuracao/aluno-configuracao';

@Component({
  selector: 'page-aluno-menu-lateral',
  templateUrl: 'aluno-menu-lateral.html',
})
export class AlunoMenuLateralPage {

  situcao: any;

  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any;

  nomeUsuario: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

    });
    // this.situcao = this.navParams.get('siticao');
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
    this.situcao = localStorage.getItem('pendenciaProf');
    if (this.situcao == 'ACEITO') {
      this.rootPage = AlunoTreinamentoPage;
    } else {
      this.rootPage = AlunoSelecaoPage;
    }


  }
}
