import { TreinamentoServiceProvider } from './../../../../providers/treinamento-service/treinamento-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aluno-exercicio-detalhes',
  templateUrl: 'aluno-exercicio-detalhes.html',
})
export class AlunoExercicioDetalhesPage {

  codigo: number;
  ordemTreino;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private treinamentoService: TreinamentoServiceProvider,
  ) {
    this.codigo = this.navParams.get("codigo");
  }

  ionViewDidLoad() {
    this.treinamentoService.listarOrdemDeTreinamentosPorCodigo(this.codigo)
      .subscribe(resultado => {
        this.ordemTreino = resultado
      }) 
  }

}
