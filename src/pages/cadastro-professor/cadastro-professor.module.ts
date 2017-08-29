import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorPage } from './cadastro-professor';

@NgModule({
  declarations: [
    ProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorPage),
  ],
  exports: [
    ProfessorPage
  ]
})
export class ProfessorPageModule {}
