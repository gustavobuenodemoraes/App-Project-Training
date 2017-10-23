import { Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  @Output() valorMedio: number;

  estrelas: any[] = [];

  constructor() {
    for (var index = 0; index < this.valorMedio; index++) {
      this.estrelas[index] = this.valorMedio;
    }
  }
}
