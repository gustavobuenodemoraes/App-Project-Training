import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-aluno-perfil-professor',
  templateUrl: 'aluno-perfil-professor.html',
})
export class AlunoPerfilDoProfessorPage {
  professor: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

  }

  deixarProfessor(): void {
    let confirm = this.alertCtrl.create({
      title: 'Deixar Professor',
      message: 'Você tem certeza que não quer mais esse professor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ngOnInit() {
    this.professor = {
      nome: '', email: '', dtNascimento: '', telefone: '', sexo: 'female'
    }
  }

}
