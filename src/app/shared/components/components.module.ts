import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDataComponent } from './card-data/card-data.component';
import { CardGeneralAdvanceComponent } from './card-general-advance/card-general-advance.component';


@NgModule({
  declarations: [CardDataComponent, CardGeneralAdvanceComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    CardDataComponent,
    CardGeneralAdvanceComponent
  ]
})
export class ComponentsModule { }
