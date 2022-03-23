import { Component, OnInit } from '@angular/core';
import { gamificationData } from 'src/app/shared/data/constant/data.constant';

@Component({
  selector: 'app-challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get cardDetail(){
    return gamificationData.data.card
  }

  get periodDetail(){
    return gamificationData.data.card.period
  }
}
