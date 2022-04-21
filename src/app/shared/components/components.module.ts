import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDataComponent } from './card-data/card-data.component';
import { CardGeneralAdvanceComponent } from './card-general-advance/card-general-advance.component';
import { MonthChallengesComponent } from './month-challenges/month-challenges.component';

import { IconButtonModule } from '@ngx-mxflame/atoms/icon-button';
import { IconModule } from '@ngx-mxflame/atoms/icon';
import { TimelineModule } from '../molecules/timeline/timeline.module';
import { ElementListModule } from '../molecules/element-list/element-list.module';
import { CircleProgressModule } from '../atoms/circle-progress/circle-progress.module';
import { RoundCardModule } from '../atoms/round-card/round-card.module';
import { ChallengeModule } from '../atoms/challenge/challenge.module';
import { TabModule } from '../atoms/tab/tab.module';
import { FrequentlyQuestionsComponent } from './frequently-questions/frequently-questions.component';
import { HeaderComponent } from './header/header.component';
import { QuestionModule } from '../atoms/question/question.module';


@NgModule({
  declarations: [CardDataComponent, CardGeneralAdvanceComponent, MonthChallengesComponent, FrequentlyQuestionsComponent, HeaderComponent, ],
  imports: [
    CommonModule,
    IconButtonModule,
    TimelineModule,
    ElementListModule,
    CircleProgressModule ,
    RoundCardModule,
    ChallengeModule,
    TabModule,
    IconModule,
    QuestionModule
  ],
  exports:[
    CardDataComponent,
    CardGeneralAdvanceComponent,
    MonthChallengesComponent,
    FrequentlyQuestionsComponent,
    HeaderComponent,
    TabModule
  ]
})
export class ComponentsModule { }
