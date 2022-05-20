import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { AnimationsDirective } from './animations.directive';
import { TabDirective } from './tab.directive';
import { TimerDirective } from './timer.directive';



@NgModule({
  declarations: [
    ModalDirective,
    AnimationsDirective, 
    TabDirective, TimerDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ModalDirective,
    AnimationsDirective,
    TabDirective
  ]
})
export class DirectivesModule { }
