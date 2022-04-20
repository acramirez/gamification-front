import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PeriodDetail } from 'src/app/shared/models/period-detail.model';

@Component({
  selector: 'app-month-challenges',
  templateUrl: './month-challenges.component.html',
  styleUrls: ['./month-challenges.component.css']
})
export class MonthChallengesComponent implements OnInit {

  @Input() periodData!:PeriodDetail[];
  @ViewChild('CarouselChallenge') carouselChallenge!:ElementRef<HTMLDivElement>

  switchChallengeModal:boolean=false ;
  currentPosition:number=0

  constructor() { }

  ngOnInit(): void {
    
  }


  setCurrentPosition(position:number){

  }

  openModal(){
    this.switchChallengeModal=true
  }

}
