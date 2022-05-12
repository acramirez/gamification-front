import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundCardComponent } from './round-card.component';



@NgModule({
  declarations: [RoundCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RoundCardComponent
  ]
})
export class RoundCardModule { }
