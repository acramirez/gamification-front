import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/icard-details';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {

  @Input() cardData!:Card

  constructor() { }

  ngOnInit(): void {
  }

}
