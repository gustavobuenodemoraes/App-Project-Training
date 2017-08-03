import { ProfessorPage } from './../professor/professor';
import { AlunoPage } from './../aluno/aluno';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginData = { email:'', senha:'' };
  data: any;

  constructor(public navCtrl: NavController, public authService: AuthService) {

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
    });
}

}
