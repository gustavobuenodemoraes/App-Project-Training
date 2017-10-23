import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RatingComponent } from './rating';

@NgModule({
  declarations: [
    RatingComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    RatingComponent
  ]
})
export class RatingComponentModule {}
