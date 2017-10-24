import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, LoadingController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-professor',
  templateUrl: 'cadastro-professor.html',
})
export class cadastroProfessorPage {

    loading: any;
    data: any;
    dadosProfessor = { nome:'', senha:'',  email:'', dtNascimento:'', confef: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public authService: AuthService) {
  }

  doCadastroProfessor() {
    this.showLoader();
    this.authService.registerProfessor(this.dadosProfessor).then((result) => {
      this.data = result;
      this.loading.dismiss();
      localStorage.setItem('token', this.data.Authentication);
    }, (err) => {
    	this.loading.dismiss();
        this.presentToast("Ocorreu um erro ao tentar salvar o Professor!");
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Salvando...'
    });

    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorPage');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
