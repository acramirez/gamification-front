import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PeriodDetail } from 'src/app/models/period-detail.model';
import { MONTHS } from '../../data/months.const';

@Component({
  selector: 'app-card-month-challenges',
  templateUrl: './card-month-challenges.component.html',
  styleUrls: ['./card-month-challenges.component.css']
})
export class CardMonthChallengesComponent implements OnInit {

  /**
   * Has the info which is used in the component
   *
   * @type {PeriodDetail}
   * 
   */
  @Input() periodDetailData!:PeriodDetail
  month!:number | string;
  @Input()ind:number=0

  constructor() { }


  ngOnInit(): void {
    const numberMonth=this.periodDetailData.initial_date.getMonth();
    this.month =MONTHS[numberMonth]
    
  }



}
