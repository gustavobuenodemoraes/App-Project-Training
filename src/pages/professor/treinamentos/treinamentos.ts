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
  //filtra o nome do treinamento
  getfilterTreinamento(event) {

  }

  getEditTreinamento(id: any) {
    this.navCtrl.push(CadastroTreinamentoPage, { id: id});
  }

  addTreinamentos():void{
    this.navCtrl.push(CadastroTreinamentoPage);
  }

  ngOnInit() {
    this.treinamentoService.listarTreinamentosDoProfessor()
      .subscribe(resultado => this.treinamentos = resultado)
  }

}
