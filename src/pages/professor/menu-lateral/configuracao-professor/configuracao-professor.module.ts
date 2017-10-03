import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracaoProfessorPage } from './configuracao-professor';

@NgModule({
  declarations: [
    ConfiguracaoProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracaoProfessorPage),
  ],
  exports: [
    ConfiguracaoProfessorPage
  ]
})
export class ConfiguracaoProfessorPageModule {}
