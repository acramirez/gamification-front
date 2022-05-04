import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { DirectivesModule } from '../../directives/directives.module';
import { ButtonModule } from "@ngx-mxflame/atoms/button";



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    ButtonModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
