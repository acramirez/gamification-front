import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { PeriodDetail } from 'src/app/shared/models/period-detail.model';

@Component({
  selector: 'app-card-general-advance',
  templateUrl: './card-general-advance.component.html',
  styleUrls: ['./card-general-advance.component.css']
})
export class CardGeneralAdvanceComponent {

    /**
   * Has the info which is used in the component
   *
   * @type {Card}
   * 
   */
  @Input() cardData!:Card
    /**
   * Has the info which is used in the component
   *
   * @type {Period}
   * 
   */
  @Input() periodData!:PeriodDetail[]

}
