import { CadastroExerciciosPage } from './cadastro-exercicios/cadastro-exercicios';
import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html'
})
export class ExerciciosPage {

  exercicios: Array<any>

  constructor(public navCtrl: NavController, private localService: LocalService) {
  }

  selecionaExercicio(id: any) {
    this.navCtrl.push(CadastroExerciciosPage, { id: id });
  }

  getExercicios(ev) {
    this.carregaExercicios()

    // set val to the value of the ev target
    let val = ev.target.value;
    

    if (val && val.trim() != '') {
      this.exercicios = this.exercicios.filter(resultado => resultado.toLowerCase.indexOf(val.toLocaleLowerCase))
    }

    // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.exercicios = this.exercicios.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
      
  }

  ngOnInit() {
    this.carregaExercicios()
  }

  private carregaExercicios() {
    this.localService.listaExercicios()
      .subscribe(resultado => this.exercicios = resultado)
  }
  
}
