import { ProfessorPage } from './../professor/professor';
import { AlunoPage } from './../aluno/aluno';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginData = { email:'', senha:'' };
  data: any;

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl: ToastController) {

  }
 goToAluno(){
    this.navCtrl.push(AlunoPage);
  }

goToProfessor(){
    this.navCtrl.push(ProfessorPage);
 }
doLogin() {
    this.authService.login(this.loginData).then((result) => {
    	this.data = result;
        localStorage.setItem('token', this.data.Authentication);
    }, (err) => {
    	if(err.status == 401){
    		this.presentToast("Email ou senha invalidos!");
    	}else{
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

}
