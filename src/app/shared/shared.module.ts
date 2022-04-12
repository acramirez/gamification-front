import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { TimelineModule } from './molecules/timeline/timeline.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    TimelineModule
  ],
  exports:[
    ComponentsModule,
    TimelineModule
  ]
})
export class SharedModule { }
