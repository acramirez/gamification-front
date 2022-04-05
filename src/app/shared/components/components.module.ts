import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDataComponent } from './card-data/card-data.component';
import { CardGeneralAdvanceComponent } from './card-general-advance/card-general-advance.component';
import { MonthChallengesComponent } from './month-challenges/month-challenges.component';
import { CardMonthChallengesComponent } from './card-month-challenges/card-month-challenges.component';
import { ModalChallengeLikeuComponent } from './modal-challenge-likeu/modal-challenge-likeu.component';
import { ModalChallengesComponent } from './modal-challenges/modal-challenges.component';


@NgModule({
  declarations: [CardDataComponent, CardGeneralAdvanceComponent, MonthChallengesComponent, CardMonthChallengesComponent, ModalChallengeLikeuComponent, ModalChallengesComponent],
  imports: [
    CommonModule,
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
