import { AlunoTreinamentoServiceProvider } from './../../../providers/aluno-treinamento-service/aluno-treinamento-service';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alunoTreinamentoService: AlunoTreinamentoServiceProvider) {
  }

  ionViewDidLoad() {
    this.treinamentos = []
  }

  Exercicios(codigo, nomeTreinamento): void {
    this.navCtrl.push(AlunoExercicioPage, { codigo: codigo, nomeTreinamento: nomeTreinamento });
  }

    ngOnInit() {
          this.alunoTreinamentoService.listarTreinamentosDosAlunos()
      .subscribe(resultado => this.treinamentos = resultado)
    }

}
