import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListaTreinamentoComponent } from './lista-treinamento';

@NgModule({
  declarations: [
    ListaTreinamentoComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListaTreinamentoComponent
  ]
})
export class ListaTreinamentoComponentModule {}
