import { AlunoTreinamentoServiceProvider } from './../../../../providers/aluno-treinamento-service/aluno-treinamento-service';
import { TreinamentoServiceProvider } from './../../../../providers/treinamento-service/treinamento-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { ProfessorServiceProvider } from '../../../../providers/professor-service/professor-service';
import { AlunoServiceProvider } from '../../../../providers/aluno-service/aluno-service';

@Component({
  selector: 'page-perfil-aluno',
  templateUrl: 'perfil-aluno.html',
})
export class PerfilAlunoPage {
  usuario: any
  codigo: any

  exercicios: Array<any> = [];
  exerciciosJaSelecionados: Array<any> = [];

  testCheckboxOpen: boolean;
  testCheckboxResult;

  observacaoDoProfessor: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private professorServiceProvider: ProfessorServiceProvider,
    public alertCtrl: AlertController,
    private treinamentoService: TreinamentoServiceProvider,
    private alunoTreinamentoService: AlunoTreinamentoServiceProvider,
    private alunoService: AlunoServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public alerCtrl: AlertController
  ) {
    this.codigo = navParams.get('codigo');
  }

  ionViewDidEnter() {
    this.professorServiceProvider.mostrarAlunoProfessor(this.codigo)
      .subscribe(resultado => {
        this.usuario = resultado
        this.observacaoDoProfessor = resultado.observacaoDoProfessor;
      });
    this.atualizarDadosTreinamentos();
  }
  salvarObservacaoProfessor() {
    this.showLoader();
    this.alunoService.salvarObservacaoAluno(this.codigo, this.observacaoDoProfessor).then((result) => {

      this.loading.dismiss();
      this.presentToast("Salvo com sucesso!");
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o exercicio!");
    });
  }

  deixarAluno() {
    let confirm = this.alerCtrl.create({
      title: 'Deixar o Aluno?',
      message: 'Você deseja não ser mais professor desse aluno?',
      buttons: [
        {
          text: 'Concordo',
          cssClass: 'botaonCacel',
          handler: () => {
            this.apagarAluno();
          }
        },
        {
          text: 'Discordo',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

  private apagarAluno() {
    this.showLoader();
    this.professorServiceProvider.abandonarAluno(this.codigo).then((result) => {
      this.loading.dismiss();
      this.presentToast(this.usuario.nome + " não é mais seu aluno");
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o exercicio!");
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {

    });

    toast.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Salvando...'
    });

    this.loading.present();
  }



  atualizarDadosTreinamentos() {
    this.treinamentoService.listarTreinamentosDoProfessor()
      .subscribe(resultado => this.exercicios = resultado)

    this.alunoTreinamentoService.listarTreinamentosDosAlunos(this.codigo)
      .subscribe(resultado => this.exerciciosJaSelecionados = resultado)
  }

  procurarIndice(arraySearch, atributo, valor) {
    for (var i in arraySearch) {
      var row = arraySearch[i];
      if (row[atributo] == valor) {
        return true;
      }
    }
    return false;
  }

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os Treinamentos');
    this.exercicios.forEach(element => {
      alert.addInput({
        type: 'checkbox',
        label: element.nome,
        value: element,
        checked: this.procurarIndice(this.exerciciosJaSelecionados, "codigo", element.codigo)
      });
    });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Enviar',
      handler: data => {
        this.alunoTreinamentoService.salvarTreinamentoAluno(data, this.codigo);
        this.testCheckboxResult = data;
      }
    });

    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

}