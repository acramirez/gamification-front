import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { TimelineModule } from './molecules/timeline/timeline.module';
import { ElementListModule } from './molecules/element-list/element-list.module';
import { ModalModule } from './molecules/modal/modal.module';
import { DirectivesModule } from './directives/directives.module';
import { ErrorDialogModule } from './atoms/error-dialog/error-dialog.module';
import { TimerPipe } from './pipes/timer.pipe';




@NgModule({
  declarations: [TimerPipe],
  imports: [
    CommonModule,
    ComponentsModule,
    TimelineModule,
    ElementListModule,
    ModalModule,
    DirectivesModule,
    ErrorDialogModule
  ],
  exports:[
    ComponentsModule,
    TimelineModule,
    ElementListModule,
    ModalModule,DirectivesModule,
  ]
})
export class SharedModule { }
