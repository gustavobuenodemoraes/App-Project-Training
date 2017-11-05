import { AlunoServiceProvider } from './../../../../providers/aluno-service/aluno-service';
import { ProfessorServiceProvider } from './../../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes-selecao-aluno-professor',
  templateUrl: 'detalhes-selecao-aluno-professor.html',
})
export class DetalhesSelecaoAlunoProfessorPage {
  aluno: { codigo: number; nome: string; dtNascimento: string; altura: number; peso: number; };
  dados: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private professorService: ProfessorServiceProvider,
    private toastCtrl: ToastController,
    private alunoService: AlunoServiceProvider) {
    this.dados = this.navParams.get("dados");
  }

  aceitar(): void {
    this.professorService.aceitarSolicitacaoAluno(this.dados).then((result) => {
    }, (err) => {
        this.presentToast("Ocorreu um erro ao tentar aceitar o aluno!");
    });
    // volta a pagina
    this.navCtrl.pop();
  }

  recusar(): void {
    this.professorService.recusarSolicitacaoAluno(this.dados).then((result) => {
    }, (err) => {
        this.presentToast("Ocorreu um erro ao tentar recusar o aluno!");
    });
    // volta a pagina
    this.navCtrl.pop();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom',
      dismissOnPageChange: true
    });
  }
  ionViewDidLoad() {
      this.alunoService.mostrarAluno(this.dados.aluno.codigo)
        .subscribe(resultado => this.aluno = resultado)
  }

}
