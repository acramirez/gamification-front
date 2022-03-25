import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { Period } from '../../interfaces/iperiod-details';

@Component({
  selector: 'app-month-challenges',
  templateUrl: './month-challenges.component.html',
  styleUrls: ['./month-challenges.component.css']
})
export class MonthChallengesComponent implements OnInit {

  @Input() periodData!:Period;
  // @ViewChildren('pointCarousel') points!:QueryList<'pointCarousel'>
  @ViewChild('CarouselChallenge') carouselChallenge!:ElementRef<HTMLDivElement>

  switchChallengeModal:boolean=false ;
  currentPosition:number=0

  constructor() { }

  ngOnInit(): void {
    console.log();
    
  }


  setCurrentPosition(position:number){

  }

  openModal(){
    this.switchChallengeModal=true
  }

}
