import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { TimelineModule } from './molecules/timeline/timeline.module';
import { ElementListModule } from './molecules/element-list/element-list.module';
import { ModalModule } from './molecules/modal/modal.module';
import { DirectivesModule } from './directives/directives.module';
import { ErrorDialogComponent } from './atoms/error-dialog/error-dialog.component';




@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    TimelineModule,
    ElementListModule,
    ModalModule,
    DirectivesModule
  ],
  exports:[
    ComponentsModule,
    TimelineModule,
    ElementListModule,
    ModalModule,DirectivesModule,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
