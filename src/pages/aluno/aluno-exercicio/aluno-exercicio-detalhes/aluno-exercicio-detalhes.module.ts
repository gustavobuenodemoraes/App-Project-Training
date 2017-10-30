import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoExercicioDetalhesPage } from './aluno-exercicio-detalhes';

@NgModule({
  declarations: [
    AlunoExercicioDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoExercicioDetalhesPage),
  ],
  exports: [
    AlunoExercicioDetalhesPage
  ]
})
export class AlunoExercicioDetalhesPageModule {}
