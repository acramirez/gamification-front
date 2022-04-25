import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { TimelineModule } from './molecules/timeline/timeline.module';
import { ElementListModule } from './molecules/element-list/element-list.module';
import { ModalModule } from './molecules/modal/modal.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    TimelineModule,
    ElementListModule,
    ModalModule
  ],
  exports:[
    ComponentsModule,
    TimelineModule,
    ElementListModule,
    ModalModule
  ]
})
export class SharedModule { }
