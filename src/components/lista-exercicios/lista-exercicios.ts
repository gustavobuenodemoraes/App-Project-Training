import { Component } from '@angular/core';

/**
 * Generated class for the ListaExerciciosComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'lista-exercicios',
  templateUrl: 'lista-exercicios.html'
})
export class ListaExerciciosComponent {

  text: string;

  constructor() {
    console.log('Hello ListaExerciciosComponent Component');
    this.text = 'Hello World';
  }

}
