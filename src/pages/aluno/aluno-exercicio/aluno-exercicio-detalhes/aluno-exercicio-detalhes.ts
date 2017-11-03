import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-aluno-exercicio-detalhes',
  templateUrl: 'aluno-exercicio-detalhes.html',
})
export class AlunoExercicioDetalhesPage {
  exercicio;

  video

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.navParams.get("codgio");
    this.video = "https://www.youtube.com/watch?v=WwXS2TeFmeg";
  }

  ionViewDidLoad() {
    this.exercicio = {
      id: 1,
      aparelho: "maquina de supino",
      descricao: "estabilize o tronco durante os movimentos e não movimente os ombros, estabilize o tronco durante os movimentos e não movimente os ombros, estabilize o tronco durante os movimentos e não movimente os ombros, estabilize o tronco durante os movimentos e não movimente os ombros, estabilize o tronco durante os movimentos e não movimente os ombros",
      linkVideo: "https://www.youtube.com/watch?v=WwXS2TeFmeg",
      musculos: "peitorais",
      nome: "Supino",
      serie: '3',
      repeticao: '12'
    }
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.exercicio.linkVideo);

    console.log(this.video);

  }

}
