import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorExerciciosPage } from './professor-exercicios';

@NgModule({
  declarations: [
    ProfessorExerciciosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorExerciciosPage),
  ],
  exports: [
    ProfessorExerciciosPage
  ]
})
export class ProfessorExerciciosPageModule {}
