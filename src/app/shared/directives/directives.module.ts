import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { TabsDirective } from './tabs.directive';
import { AnimationsDirective } from './animations.directive';



@NgModule({
  declarations: [ModalDirective, TabsDirective, AnimationsDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ModalDirective,
    TabsDirective,
    AnimationsDirective
  ]
})
export class DirectivesModule { }
