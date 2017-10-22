import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoPerfilProfessorPage } from './aluno-perfil-professor';

@NgModule({
  declarations: [
    AlunoPerfilProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoPerfilProfessorPage),
  ],
  exports: [
    AlunoPerfilProfessorPage
  ]
})
export class AlunoPerfilProfessorPageModule {}
