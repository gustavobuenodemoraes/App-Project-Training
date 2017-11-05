import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecaoAlunoProfessorPage } from './selecao-aluno-professor';

@NgModule({
  declarations: [
    SelecaoAlunoProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecaoAlunoProfessorPage),
  ],
  exports: [
    SelecaoAlunoProfessorPage
  ]
})
export class SelecaoAlunoProfessorPageModule {}
