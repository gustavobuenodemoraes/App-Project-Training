import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, Platform } from 'ionic-angular';
import { ProfessorTabsPage } from '../professor-tabs/professor-tabs';
import { ConfiguracaoProfessorPage } from './configuracao-professor/configuracao-professor';

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

  usuario: Array<any>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onConfiguracao(): void {
    this.navCtrl.push(ConfiguracaoProfessorPage);
  }

  ngOnInit() {

  }

  ionViewDidLoad() {

  }



}
