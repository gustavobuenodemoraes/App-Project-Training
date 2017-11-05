import { YoutubePipe } from './../../../../pipes/youtube/youtube';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoExercicioDetalhesPage } from './aluno-exercicio-detalhes';

@NgModule({
  declarations: [
    AlunoExercicioDetalhesPage,
    YoutubePipe
  ],
  imports: [
    IonicPageModule.forChild(AlunoExercicioDetalhesPage),
  ],
  exports: [
    AlunoExercicioDetalhesPage
  ]
})
export class AlunoExercicioDetalhesPageModule {}
