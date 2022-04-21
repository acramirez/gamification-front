import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { TimelineModule } from './molecules/timeline/timeline.module';
import { ElementListModule } from './molecules/element-list/element-list.module';
import { RoundCardComponent } from './atoms/round-card/round-card.component';
import { QuestionComponent } from './atoms/question/question.component';




@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    TimelineModule,
    ElementListModule
  ],
  exports:[
    ComponentsModule,
    TimelineModule,
    ElementListModule
  ]
})
export class SharedModule { }
