import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTreinamentoPage } from './cadastro-treinamento';
import { ListaExerciciosComponent } from '../../../../components/lista-exercicios/lista-exercicios';

@NgModule({
  declarations: [
    CadastroTreinamentoPage,
    ListaExerciciosComponent
  ],
  imports: [
    IonicPageModule.forChild(CadastroTreinamentoPage),
  ],
  exports: [
    CadastroTreinamentoPage
  ]
})
export class CadastroTreinamentoPageModule {}
