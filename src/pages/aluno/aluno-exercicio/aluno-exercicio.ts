import { TreinamentoServiceProvider } from './../../../providers/treinamento-service/treinamento-service';
import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AlunoExercicioDetalhesPage } from './aluno-exercicio-detalhes/aluno-exercicio-detalhes';

@IonicPage()
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
    private localService: LocalService, 
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

  private acrescentaExercicio(): void {

  }

  private detalhesExercicio(codigo): void {
    // this.navCtrl.push(AlunoExercicioDetalhesPage, { codigo: codigo });
    this.modalCtrl.create(AlunoExercicioDetalhesPage,{ codigo: codigo }).present();
  }

  private salvar(): void {

  }

  private presentAlert(titulo: string, subtitulo: string, msgButton: String): void {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ['msgButton']
    });
    alert.present();
  }
}
