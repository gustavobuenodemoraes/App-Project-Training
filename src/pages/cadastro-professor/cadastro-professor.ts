import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-professor',
  templateUrl: 'cadastro-professor.html'
})
export class cadastroProfessorPage {
  loading: any;
  data: any;
  DataProfessor: any;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  doCadastroProfessor(dadosProfessor) {
    this.showLoader();
    this.authService.registerProfessor(dadosProfessor).then((result) => {
      this.data = result;
      this.loading.dismiss();
      localStorage.setItem('token', this.data.Authentication);
      this.goToLogin();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o Professor!");
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Salvando...'
    });

    this.loading.present();
  }

  ngOnInit() {
    this.DataProfessor = this.formBuilder.group({
      nome: [''],
      email: ['', Validators.pattern(this.emailPattern)],
      telefone:[''],
      dtNascimento: [''],
      confef: [''],
      sexo:[''],
      senha: ['']
    });
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

  goToLogin() {
    this.navCtrl.pop();
  }

}
