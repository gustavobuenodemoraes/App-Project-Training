import { AlunoExercicioPage } from './../aluno-exercicio/aluno-exercicio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aluno-treinamento',
  templateUrl: 'aluno-treinamento.html',
})
export class AlunoTreinamentoPage {
  treinamentos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.treinamentos = [
      { codigo: 1, nome: 'Treinamento Iniciante A' },
      { codigo: 2, nome: 'Treinamento Iniciante B' },
      { codigo: 3, nome: 'Treinamento Iniciante C' },
      { codigo: 4, nome: 'Treinamento Iniciante D' },
      { codigo: 5, nome: 'Treinamento Iniciante E' },
    ]
  }

  Exercicios(codigo, nomeTreinamento): void {
    this.navCtrl.push(AlunoExercicioPage, { codigo: codigo, nomeTreinamento: nomeTreinamento });
  }

}
