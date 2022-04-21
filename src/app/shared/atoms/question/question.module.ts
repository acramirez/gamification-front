import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { IconModule } from "@ngx-mxflame/atoms/icon";



@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports:[QuestionComponent]
})
export class QuestionModule { }
