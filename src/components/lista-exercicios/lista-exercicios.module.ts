import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListaExerciciosComponent } from './lista-exercicios';

@NgModule({
  declarations: [
    ListaExerciciosComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListaExerciciosComponent
  ]
})
export class ListaExerciciosComponentModule {}
