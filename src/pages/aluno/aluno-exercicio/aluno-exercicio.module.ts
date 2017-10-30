import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoExercicioPage } from './aluno-exercicio';

@NgModule({
  declarations: [
    AlunoExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoExercicioPage),
  ],
  exports: [
    AlunoExercicioPage
  ]
})
export class AlunoExercicioPageModule {}
