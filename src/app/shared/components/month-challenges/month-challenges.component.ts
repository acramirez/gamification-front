import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PeriodDetail } from 'src/app/shared/models/period-detail.model';
import { Tab } from '../../interfaces/atoms/tab.interface';
import { Period } from '../../interfaces/response/gamification.interface';

@Component({
  selector: 'app-month-challenges',
  templateUrl: './month-challenges.component.html',
  styleUrls: ['./month-challenges.component.css']
})
export class MonthChallengesComponent implements OnInit {

  @Input() periodData!:Period;
  @Input() tabs:Tab[]=[]

  constructor() { }

  ngOnInit(): void {
    
  }


  setCurrentPosition(position:number){

  }

  openModal(){
  }

}
