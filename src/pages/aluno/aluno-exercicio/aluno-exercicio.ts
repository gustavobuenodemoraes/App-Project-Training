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
  exercicios: Array<any>;
  nomeTreinamento: String;

  checkBoxExercicio: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localService: LocalService, public alertCtrl: AlertController,public modalCtrl: ModalController) {
    this.codigo = this.navParams.get("codigo");
    this.nomeTreinamento = this.navParams.get("nomeTreinamento");
  }

  ionViewDidLoad() {
    // apagar depois
    this.exercicios = [
      {
        id: 1,
        aparelho: "maquina de supino",
        descricao: "estabilize o tronco durante os movimentos e não movimente os ombros",
        linkVideo: "https://www.youtube.com/watch?v=WwXS2TeFmeg",
        musculos: "peitorais",
        nome: "Supino",
        serie: '3',
        repeticao: '12'
      },
      {
        id: 2,
        aparelho: "maquina de supino",
        descricao: "estabilize o tronco durante os movimentos, não flexione os cotovelos e não movimente os ombros.",
        linkVideo: "https://www.youtube.com/watch?v=NB_1mCfIOLU",
        musculos: "peitorais",
        nome: "Crucifixo",
        serie: '3',
        repeticao: '12'
      },
      {
        id: 3,
        aparelho: "inclinado, declinado, com os joelhos no chão ou com auxílio de halter.",
        descricao: "estabilize o tronco durante os movimentos e não hiperestenda os cotovelos.",
        linkVideo: "https://www.youtube.com/watch?v=q4p7R7Tc0tU",
        musculos: "peitorais ",
        nome: "Flexão de braços",
        serie: '3',
        repeticao: '12'
      }
    ]
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
