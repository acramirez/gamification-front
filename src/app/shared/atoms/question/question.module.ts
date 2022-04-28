import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { IconModule } from "@ngx-mxflame/atoms/icon";
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    IconModule,
    DirectivesModule
  ],
  exports:[QuestionComponent]
})
export class QuestionModule { }
