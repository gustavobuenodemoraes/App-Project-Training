import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesSelecaoAlunoProfessorPage } from './detalhes-selecao-aluno-professor';

@NgModule({
  declarations: [
    DetalhesSelecaoAlunoProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesSelecaoAlunoProfessorPage),
  ],
  exports: [
    DetalhesSelecaoAlunoProfessorPage
  ]
})
export class DetalhesSelecaoAlunoProfessorPageModule {}
