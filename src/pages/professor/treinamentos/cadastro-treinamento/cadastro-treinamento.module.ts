import { ListaTreinamentoComponent } from './../../../../components/lista-treinamento/lista-treinamento';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTreinamentoPage } from './cadastro-treinamento';

@NgModule({
  declarations: [
    CadastroTreinamentoPage,
    ListaTreinamentoComponent
  ],
  imports: [
    IonicPageModule.forChild(CadastroTreinamentoPage),
  ],
  exports: [
    CadastroTreinamentoPage
  ]
})
export class CadastroTreinamentoPageModule {}
