import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-aluno',
  templateUrl: 'cadastro-aluno.html'
})
export class cadastroAlunoPage {
  data: any;
  loading: any;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  DataAluno: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.DataAluno = this.formBuilder.group({
      nome: [''],
      email: ['', Validators.pattern(this.emailPattern)],
      telefone:[''],
      dtNascimento: [''],
      peso: [''],
      altura: [''],
      senha: [''],
      sexo:['']
    });
  }


  doCadastroAluno(dadosAluno) {
    this.showLoader();
    this.authService.registerAluno(dadosAluno).then((result) => {
      this.data = result;
      this.loading.dismiss();
      localStorage.setItem('token', this.data.Authentication);
      this.goToLogin();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o aluno!");
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Salvando...'
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

  goToLogin() {
    this.navCtrl.pop();
  }

}
