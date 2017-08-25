import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorAlunosPage } from './professor-alunos';

@NgModule({
  declarations: [
    ProfessorAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorAlunosPage),
  ],
  exports: [
    ProfessorAlunosPage
  ]
})
export class ProfessorAlunosPageModule {}
