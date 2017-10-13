import { Observable } from 'rxjs/Observable';
import { ExercicioServiceProvider } from './../../../providers/exercicio-service/exercicio-service';
import { CadastroExerciciosPage } from './cadastro-exercicios/cadastro-exercicios';
import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { tipoExercicio, ItipoExercicio } from './exercicios.model';

@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html'
})
export class ExerciciosPage {

  exercicios: Array<any>;

  constructor(public navCtrl: NavController, private exercicioServiceProvider: ExercicioServiceProvider) {
  }

  selecionaExercicio(id: any) {
    this.navCtrl.push(CadastroExerciciosPage, { id: id });
  }

  addExercicios(): void {
    this.navCtrl.push(CadastroExerciciosPage);
  }

  ngOnInit() {
    this.initializeItems();
  }

  filterExercicios(digitado) {
    this.initializeItems();

    var valorDigitado = digitado.target.value;

    if (valorDigitado && valorDigitado.trim() != '') {
      this.exercicios = this.exercicios.filter((resultadoList: tipoExercicio) => {
        return resultadoList.nome.toLocaleLowerCase().indexOf(valorDigitado) > -1;
      })
    }

  }

  initializeItems() {
    this.exercicios = [
      { nome: 'Amsterdam', descricao: '', codigo: 1, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Buenos Aires', descricao: '', codigo: 2, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Cairo', descricao: '', codigo: 3, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Dhaka', descricao: '', codigo: 4, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Edinburgh', descricao: '', codigo: 5, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Geneva', descricao: '', codigo: 6, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Genoa', descricao: '', codigo: 7, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Glasglow', descricao: '', codigo: 8, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Hanoi', descricao: '', codigo: 9, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Hong Kong', descricao: '', codigo: 10, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Islamabad', descricao: '', codigo: 11, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Istanbul', descricao: '', codigo: 12, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Jakarta', descricao: '', codigo: 13, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Kiel', descricao: '', codigo: 14, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Kyoto', descricao: '', codigo: 15, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Le Havre', descricao: '', codigo: 16, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Lebanon', descricao: '', codigo: 17, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Lhasa', descricao: '', codigo: 18, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Lima', descricao: '', codigo: 19, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'London', descricao: '', codigo: 20, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Los Angeles', descricao: '', codigo: 21, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Madrid', descricao: '', codigo: 22, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Manila', descricao: '', codigo: 23, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'New York', descricao: '', codigo: 24, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Olympia', descricao: '', codigo: 25, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Oslo', descricao: '', codigo: 26, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Panama City', descricao: '', codigo: 27, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Peking', descricao: '', codigo: 28, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Philadelphia', descricao: '', codigo: 29, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'San Francisco', descricao: '', codigo: 30, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Seoul', descricao: '', codigo: 31, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Taipeh', descricao: '', codigo: 32, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Tel Aviv', descricao: '', codigo: 33, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Tokio', descricao: '', codigo: 34, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Uelzen', descricao: '', codigo: 35, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
      { nome: 'Washington', descricao: '', codigo: 36, linkVideo: "https://youtu.be/RLvApqIPiTo", musculo: "Musculo" },
    ];
  }

  // private initializeItems() {
  //   this.exercicioServiceProvider.listarExerciciosDoProfessor()
  //     .subscribe(resultado => this.exercicios = resultado)
  // }
}
