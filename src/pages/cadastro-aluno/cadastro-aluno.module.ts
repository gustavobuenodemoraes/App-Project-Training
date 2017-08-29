import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoPage } from './cadastro-aluno';

@NgModule({
  declarations: [
    AlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoPage),
  ],
  exports: [
    AlunoPage
  ]
})
export class AlunoPageModule {}
