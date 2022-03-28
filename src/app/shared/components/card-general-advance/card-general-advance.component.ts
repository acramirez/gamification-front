import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/icard-details';
import { Period } from '../../interfaces/iperiod-details';

@Component({
  selector: 'app-card-general-advance',
  templateUrl: './card-general-advance.component.html',
  styleUrls: ['./card-general-advance.component.css']
})
export class CardGeneralAdvanceComponent implements OnInit {

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
  @Input() periodData!:Period

  constructor() { }

  ngOnInit(): void {
  }

}
