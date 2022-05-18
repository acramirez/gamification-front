import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { AnimationsDirective } from './animations.directive';
import { TabDirective } from './tab.directive';



@NgModule({
  declarations: [
    ModalDirective,
    AnimationsDirective, 
    TabDirective],
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
