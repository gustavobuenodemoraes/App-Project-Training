import { TreinamentoServiceProvider } from './../../../providers/treinamento-service/treinamento-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AlunoExercicioDetalhesPage } from './aluno-exercicio-detalhes/aluno-exercicio-detalhes';

@Component({
  selector: 'page-aluno-exercicio',
  templateUrl: 'aluno-exercicio.html',
})
export class AlunoExercicioPage {
  codigo: number;
  ordemTreinos: Array<any>;
  nomeTreinamento: String;
  checkBoxExercicio: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private treinamentoService: TreinamentoServiceProvider) {

    this.codigo = this.navParams.get("codigo");
    this.nomeTreinamento = this.navParams.get("nomeTreinamento");
  }

  ionViewDidLoad() {
    this.treinamentoService.listarOrdemDeTreinamentosExercicios(this.codigo)
      .subscribe(resultado => this.ordemTreinos = resultado)
  }

  detalhesExercicio(codigo): void {
    this.navCtrl.push(AlunoExercicioDetalhesPage, { codigo: codigo });
  }
}
