import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes-selecao-aluno-professor',
  templateUrl: 'detalhes-selecao-aluno-professor.html',
})
export class DetalhesSelecaoAlunoProfessorPage {
  aluno: { codigo: number; nome: string; dtNascimento: string; altura: number; peso: number; };
  codigo: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codigo = this.navParams.get("codigo");
  }

  aceitar(): void {
    // volta a pagina
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.aluno = { codigo: 1, nome: 'Pedro', dtNascimento: '1980/11/05', altura: 180, peso: 100 }

  }

}
