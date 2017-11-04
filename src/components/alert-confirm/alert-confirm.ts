import { Component } from '@angular/core';

/**
 * Generated class for the AlertConfirmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'alert-confirm',
  templateUrl: 'alert-confirm.html'
})
export class AlertConfirmComponent {

  text: string;

  constructor() {
    console.log('Hello AlertConfirmComponent Component');
    this.text = 'Hello World';
  }

}
