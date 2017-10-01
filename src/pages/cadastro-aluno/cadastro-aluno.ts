import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, LoadingController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-aluno',
  templateUrl: 'cadastro-aluno.html',
})
export class cadastroAlunoPage {

  data: any;
  loading: any;
  dadosAluno = { nome:'', senha:'',  email:'', dtNascimento:'', peso:'', altura:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoPage');
  }

  doCadastroAluno() {
    this.showLoader();
    this.authService.registerAluno(this.dadosAluno).then((result) => {
      this.data = result;
      this.loading.dismiss();
      localStorage.setItem('token', this.data.Authentication);
    }, (err) => {
    	this.loading.dismiss();
        this.presentToast("Ocorreu um erro ao tentar salvar o aluno!");
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

    this.loading.present();
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
