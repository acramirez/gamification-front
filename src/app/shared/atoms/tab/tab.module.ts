import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports:[TabComponent]
})
export class TabModule { }
