import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroExerciciosPage } from './cadastro-exercicios';

@NgModule({
  declarations: [
    CadastroExerciciosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroExerciciosPage),
  ],
  exports: [
    CadastroExerciciosPage
  ]
})
export class CadastroExerciciosPageModule {}
