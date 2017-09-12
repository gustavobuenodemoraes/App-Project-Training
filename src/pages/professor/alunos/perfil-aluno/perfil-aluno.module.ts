import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilAlunoPage } from './perfil-aluno';

@NgModule({
  declarations: [
    PerfilAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilAlunoPage),
  ],
  exports: [
    PerfilAlunoPage
  ]
})
export class PerfilAlunoPageModule {}
