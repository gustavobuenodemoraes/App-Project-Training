import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoConfiguracaoPage } from './aluno-configuracao'; 

@NgModule({
  declarations: [
    AlunoConfiguracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoConfiguracaoPage)
  ],
  exports: [
    AlunoConfiguracaoPage
  ]
})
export class AlunoConfiguracaoPageModule {}
