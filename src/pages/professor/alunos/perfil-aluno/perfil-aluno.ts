import { AlunoTreinamentoServiceProvider } from './../../../../providers/aluno-treinamento-service/aluno-treinamento-service';
import { TreinamentoServiceProvider } from './../../../../providers/treinamento-service/treinamento-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfessorServiceProvider } from '../../../../providers/professor-service/professor-service';


@IonicPage()
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private professorServiceProvider: ProfessorServiceProvider,
    public alertCtrl: AlertController,
    private treinamentoService: TreinamentoServiceProvider,
    private alunoTreinamentoService: AlunoTreinamentoServiceProvider,
  ) {
    this.codigo = navParams.get('codigo');
  }

  ionViewDidEnter() {
    this.professorServiceProvider.mostrarAlunoProfessor(this.codigo)
      .subscribe(resultado => this.usuario = resultado);

    this.atualizarDadosTreinamentos();
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