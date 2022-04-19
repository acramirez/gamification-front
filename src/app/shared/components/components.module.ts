import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDataComponent } from './card-data/card-data.component';
import { CardGeneralAdvanceComponent } from './card-general-advance/card-general-advance.component';
import { MonthChallengesComponent } from './month-challenges/month-challenges.component';
import { CardMonthChallengesComponent } from './card-month-challenges/card-month-challenges.component';
import { ModalChallengeLikeuComponent } from './modal-challenge-likeu/modal-challenge-likeu.component';
import { ModalChallengesComponent } from './modal-challenges/modal-challenges.component';

import { IconButtonModule } from '@ngx-mxflame/atoms/icon-button';
import { TimelineModule } from '../molecules/timeline/timeline.module';
import { ElementListModule } from '../molecules/element-list/element-list.module';
import { CircleProgressComponent } from '../molecules/circle-progress/circle-progress.component';
import { CircleProgressModule } from '../molecules/circle-progress/circle-progress.module';


@NgModule({
  declarations: [CardDataComponent, CardGeneralAdvanceComponent, MonthChallengesComponent, CardMonthChallengesComponent, ModalChallengeLikeuComponent, ModalChallengesComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    TimelineModule,
    ElementListModule,
    CircleProgressModule 
  ],
  exports:[
    CardDataComponent,
    CardGeneralAdvanceComponent,
    MonthChallengesComponent,
    ModalChallengesComponent,
    ModalChallengeLikeuComponent
  ]
})
export class ComponentsModule { }
