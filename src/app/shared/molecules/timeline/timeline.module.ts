import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { IconModule } from '@ngx-mxflame/atoms/icon';




@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports:[
    TimelineComponent
  ]
})
export class TimelineModule { }
