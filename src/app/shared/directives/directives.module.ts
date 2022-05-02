import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { TabsDirective } from './tabs.directive';



@NgModule({
  declarations: [ModalDirective, TabsDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ModalDirective,
    TabsDirective
  ]
})
export class DirectivesModule { }
