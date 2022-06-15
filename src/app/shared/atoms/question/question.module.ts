import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports:[QuestionComponent]
})
export class QuestionModule { }
