import { LocalService } from './../../../providers/local/login.service';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, Platform } from 'ionic-angular';
import { ProfessorTabsPage } from '../professor-tabs/professor-tabs';

/**
 * Generated class for the MenuLateralPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu-lateral',
  templateUrl: 'menu-lateral.html',
})
export class MenuLateralPage {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = ProfessorTabsPage;

  usuario: any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private localService: LocalService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.localService.mostraUsuario(1)
    .subscribe(resultado => this.usuario = resultado)
  }
  
  ionViewDidLoad() {

  }

}
