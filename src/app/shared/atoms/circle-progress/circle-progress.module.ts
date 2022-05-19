import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent } from './circle-progress.component';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [CircleProgressComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports:[
    CircleProgressComponent
  ]
})
export class CircleProgressModule { }
