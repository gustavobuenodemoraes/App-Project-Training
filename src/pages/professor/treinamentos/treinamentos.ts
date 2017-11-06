import { TreinamentoServiceProvider } from './../../../providers/treinamento-service/treinamento-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroTreinamentoPage } from './cadastro-treinamento/cadastro-treinamento';

@Component({
  selector: 'page-treinamentos',
  templateUrl: 'treinamentos.html'
})
export class TreinamentosPage {

  treinamentos: any[];

  constructor(public navCtrl: NavController, private treinamentoService: TreinamentoServiceProvider) {
  }


  getEditTreinamento(treinamento: any) {
    this.navCtrl.push(CadastroTreinamentoPage, { treinamento: treinamento });
  }

  addTreinamentos(): void {
    this.navCtrl.push(CadastroTreinamentoPage);
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.initializeItems();
  }

  //filtra o nome do treinamento
  getfilterTreinamento(digitado) {
    if (digitado.inputType === "deleteContentBackward" || digitado.inputType === "MouseEvent") {
      this.initializeItems();
    }

    let valorDigitado = digitado.target.value;


    if (valorDigitado && valorDigitado.trim() != '') {
      this.treinamentos = this.treinamentos.filter((resultadoList) => {
        return resultadoList.nome.toLocaleLowerCase().indexOf(valorDigitado.toLocaleLowerCase()) > -1;
      })
    } else {
      this.initializeItems();
    }
  }

  initializeItems(): any {
    this.treinamentoService.listarTreinamentosDoProfessor()
      .subscribe(resultado => this.treinamentos = resultado);
  }

}
