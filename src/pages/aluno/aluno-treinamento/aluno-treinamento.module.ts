import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoTreinamentoPage } from './aluno-treinamento';

@NgModule({
  declarations: [
    AlunoTreinamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoTreinamentoPage),
  ],
  exports: [
    AlunoTreinamentoPage
  ]
})
export class AlunoTreinamentoPageModule {}
