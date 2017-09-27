import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroTreinamentoPage } from './cadastro-treinamento/cadastro-treinamento';

@Component({
  selector: 'page-treinamentos',
  templateUrl: 'treinamentos.html'
})
export class TreinamentosPage {
  treinamentos: any[];

  constructor(public navCtrl: NavController, private localService: LocalService) {
  }
  //filtra o nome do treinamento
  getfilterTreinamento(event) {

  }

  getEditTreinamento(id: any) {
    this.navCtrl.push(CadastroTreinamentoPage, { id: id, titulo:'Alterar Treinamento' });
  }

  addTreinamentos():void{
    this.navCtrl.push(CadastroTreinamentoPage);
  }

  ngOnInit() {
    this.localService.listarTreinamentos()
      .subscribe(resultado => this.treinamentos = resultado)
  }

}
