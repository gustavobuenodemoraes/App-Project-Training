import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-aluno-perfil-professor',
  templateUrl: 'aluno-perfil-professor.html',
})
export class AlunoPerfilProfessorPage {

  professor: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.professor = [
      {codigo: 1, nome: 'Paulo', email:'paulo@paulo.com',dtNascimento:'12/30/2017',Cref:'028145-G/MG',sexo: 'male'},
      {codigo: 2, nome: 'Gustavo', email:'gustavo@gusatvo.com',dtNascimento:'03/11/1995',Cref:'028145-G/RJ',sexo: 'male'},
      {codigo: 8, nome: 'Teste', email:'teste@teste.com',dtNascimento:'11/31/1981',Cref:'028145-P/SP',sexo: 'female'},
    ]
  }

  ionViewDidLoad() {
    
  }

}
