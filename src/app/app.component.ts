import { AuthService } from './../providers/auth-service/auth-service';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfiguracaoProfessorPage } from '../pages/professor/configuracao-professor/configuracao-professor';
import { AlunoSelecaoPage } from '../pages/aluno/aluno-selecao/aluno-selecao';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = AlunoSelecaoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}
