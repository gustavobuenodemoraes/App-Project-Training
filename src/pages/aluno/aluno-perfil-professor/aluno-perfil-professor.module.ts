import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoPerfilDoProfessorPage } from './aluno-perfil-professor';

@NgModule({
  declarations: [
    AlunoPerfilDoProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoPerfilDoProfessorPage),
  ],
  exports: [
    AlunoPerfilDoProfessorPage
  ]
})
export class AlunoPerfilDoProfessorPageModule {}
