import { RatingComponent } from './../../../components/rating/rating';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoSelecaoPage } from './aluno-selecao';

@NgModule({
  declarations: [
    AlunoSelecaoPage,
    RatingComponent
  ],
  imports: [
    IonicPageModule.forChild(AlunoSelecaoPage),
  ],
  exports: [
    AlunoSelecaoPage
  ]
})
export class AlunoSelecaoPageModule {}
