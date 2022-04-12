import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { TimelineModule } from './molecules/timeline/timeline.module';
import { ElementListModule } from './atoms/element-list/element-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    TimelineModule,
    ElementListModule
  ],
  exports:[
    ComponentsModule,
    TimelineModule,
    ElementListModule
  ]
})
export class SharedModule { }
