import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTreinamentoPage } from './cadastro-treinamento';

@NgModule({
  declarations: [
    CadastroTreinamentoPage
  ],
  imports: [
    IonicPageModule.forChild(CadastroTreinamentoPage),
  ],
  exports: [
    CadastroTreinamentoPage
  ]
})
export class CadastroTreinamentoPageModule {}
