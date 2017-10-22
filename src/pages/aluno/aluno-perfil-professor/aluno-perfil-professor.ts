import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-aluno-perfil-professor',
  templateUrl: 'aluno-perfil-professor.html',
})
export class AlunoPerfilProfessorPage {
  codigo: any;

  professor: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private localService: LocalService) {
    this.codigo = navParams.get('codigo');
  }

  ionViewDidLoad() {
    this.localService.mostrarProfessor(this.codigo)
      .subscribe(resultado => this.professor = resultado);
  }

}
