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

  exercicios: Array<any> = [
    "Avançado 1",
    "Iniciante2",
    "Iniciante3"
  ];

  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private professorServiceProvider: ProfessorServiceProvider,
    public alertCtrl: AlertController
  ) {
    this.codigo = navParams.get('codigo');
  }

  ngOnInit() {
    this.professorServiceProvider.mostrarAlunoProfessor(this.codigo)
      .subscribe(resultado => this.usuario = resultado)
  }

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os Treinamentos');

    this.exercicios.forEach(element => {
      alert.addInput({
        type: 'checkbox',
        label: element,
        value: element,
        // checked: true
      });
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Enviar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });

    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

}