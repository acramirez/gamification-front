import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/icard-details';
import { Period } from '../../interfaces/iperiod-details';

@Component({
  selector: 'app-card-general-advance',
  templateUrl: './card-general-advance.component.html',
  styleUrls: ['./card-general-advance.component.css']
})
export class CardGeneralAdvanceComponent implements OnInit {

  @Input() cardData!:Card
  @Input() periodData!:Period

  constructor() { }

  ngOnInit(): void {
  }

}
