import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorTreinamentosPage } from './professor-treinamentos';

@NgModule({
  declarations: [
    ProfessorTreinamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorTreinamentosPage),
  ],
  exports: [
    ProfessorTreinamentosPage
  ]
})
export class ProfessorTreinamentosPageModule {}
