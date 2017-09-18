import { LocalService } from './../../providers/local/login.service';
import { cadastroAlunoPage } from './../cadastro-aluno/cadastro-aluno';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { MenuLateralPage } from '../professor/menu-lateral/menu-lateral';
import { cadastroProfessorPage } from '../cadastro-professor/cadastro-professor';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  [x: string]: any;

  loginData = { email: '', senha: '' };
  data: any;

  constructor(public navCtrl: NavController, private localService: LocalService) {
    this.goToProfessor()
  }

  goTocadastroAluno() {
    this.navCtrl.push(cadastroAlunoPage);
  }

  goTocadastroProfessor() {
    this.navCtrl.push(cadastroProfessorPage);
  }

  goToProfessor() {
    this.navCtrl.setRoot(MenuLateralPage);
  }

  doLogin(form) {
    let valorForm = form.value

    if(valorForm.email == "teste@teste.com" && valorForm.senha == "teste"){
      this.goToProfessor()
    }
    /*
    this.AuthService.login(this.loginData).then((result) => {
      this.data = result;
      localStorage.setItem('token', this.data.Authentication);
    }, (err) => {
      if (err.status == 401) {
        this.presentToast("Email ou senha invalidos!");
      } else {
        this.presentToast("Ocorreu um erro ao tentar logar, tente novamente!");
      }
    });
    */
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.present();
  }
}
