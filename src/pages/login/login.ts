import { ProfessorTabsPage } from './../professor/professor-tabs/professor-tabs';
import { MenuController } from 'ionic-angular';
import { Login } from './login.model';
import { cadastroAlunoPage } from './../cadastro-aluno/cadastro-aluno';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { cadastroProfessorPage } from '../cadastro-professor/cadastro-professor';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginData: Login = { email: '', senha: '' };
  data;

  orderForm: FormGroup;

  conectado: boolean;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl: ToastController, private menuCtrl: MenuController) {

  }

  goTocadastroAluno() {
    this.navCtrl.push(cadastroAlunoPage);
  }

  goTocadastroProfessor() {
    this.navCtrl.push(cadastroProfessorPage);
  }

  goToProfessor() {
    this.navCtrl.setRoot(ProfessorTabsPage);
  }

  doLogin() {
    this.authService.login(this.loginData).then((result) => {
      this.data = result;
      localStorage.setItem('token', this.data.Authentication);
      localStorage.setItem('codUsuarioLogado', this.data.codigo);
      this.goToProfessor();
    }, (err) => {
      if (err.status == 401) {
        this.presentToast("Email ou senha invalidos!");
      } else {
        this.presentToast("Ocorreu um erro ao tentar logar, tente novamente!");
      }
    });
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

  ionViewDidLoad() {
    let email: string = localStorage.getItem('email');
    let senha: string = localStorage.getItem('senha');
    if (email != null && senha != null) {
      this.loginData.email = email;
      this.loginData.senha = senha;

      this.doLogin();
    }


  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menuProfessor');
  }

  ManterConectado() {
    if (this.conectado == true) {
      let email: string = String(this.loginData.email);
      let senha: string = String(this.loginData.senha);
      if (email != '' && senha != '') {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
      }
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('senha');
    }
  }
}
