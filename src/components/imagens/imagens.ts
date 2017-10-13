import { Component, Input } from '@angular/core';

/**
 * Generated class for the ImagensComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'imagens',
  templateUrl: 'imagens.html'
})
export class ImagensComponent {

  @Input() url: string;

  constructor() {
    
  }

}
