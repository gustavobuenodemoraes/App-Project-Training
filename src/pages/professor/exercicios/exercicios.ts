import { ExercicioServiceProvider } from './../../../providers/exercicio-service/exercicio-service';
import { CadastroExerciciosPage } from './cadastro-exercicios/cadastro-exercicios';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { tipoExercicio } from './exercicios.model';

@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html'
})
export class ExerciciosPage {

  exercicios: Array<any>;

  constructor(public navCtrl: NavController, private exercicioServiceProvider: ExercicioServiceProvider) {
  }

  selecionaExercicio(codigo: any) {
    this.navCtrl.push(CadastroExerciciosPage, { codigo: codigo });
  }

  addExercicios(): void {
    this.navCtrl.push(CadastroExerciciosPage);
  }

  ngOnInit() {
    this.initializeItems();
  }

  filterExercicios(digitado) {
    if (digitado.inputType === "deleteContentBackward") {
      this.initializeItems();
    }

    console.log(digitado);

    let valorDigitado = digitado.target.value;

    if (valorDigitado && valorDigitado.trim() != '') {
      this.exercicios = this.exercicios.filter((resultadoList: tipoExercicio) => {
        console.log(resultadoList);
        return resultadoList.nome.toLocaleLowerCase().indexOf(valorDigitado) > -1;
      })
    }
  }

  initializeItems() {
    this.exercicioServiceProvider.listarExercicios()
      .subscribe(resultado => {
        this.exercicios = resultado;
      })
  }
}
