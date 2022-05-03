import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,DirectivesModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
