import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { cadastroAlunoPage } from './cadastro-aluno';

@NgModule({
  declarations: [
    cadastroAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(cadastroAlunoPage),
  ],
  exports: [
    cadastroAlunoPage
  ]
})
export class cadastroAlunoPageModule {}
