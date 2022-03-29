import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {

  /**
   * Has the info which is used in the component
   *
   * @type {Card}
   * 
   */
  @Input() cardData!:Card

  constructor() { }

  ngOnInit(): void {
  }

}
