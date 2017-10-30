import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoMenuLateralPage } from './aluno-menu-lateral';

@NgModule({
  declarations: [
    AlunoMenuLateralPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoMenuLateralPage),
  ],
  exports: [
    AlunoMenuLateralPage
  ]
})
export class AlunoMenuLateralPageModule {}
