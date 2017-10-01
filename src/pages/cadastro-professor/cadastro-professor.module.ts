import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { cadastroProfessorPage } from './cadastro-professor';

@NgModule({
  declarations: [
    cadastroProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(cadastroProfessorPage),
  ],
  exports: [
    cadastroProfessorPage
  ]
})
export class cadastroProfessorPageModule {}
