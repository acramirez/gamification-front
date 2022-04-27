import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PeriodDetail } from 'src/app/shared/models/period-detail.model';
import { Tab } from '../../interfaces/atoms/tab.interface';
import { Challenge, ChallengesContract } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'app-month-challenges',
  templateUrl: './month-challenges.component.html',
  styleUrls: ['./month-challenges.component.css']
})
export class MonthChallengesComponent implements OnInit {

  @Input() mandatoryChallenges!:Challenge[];
  @Input() optionalChallenges!:Challenge[];

  @Input() tabs:Tab[]=[]

  @Output() indexTab = new EventEmitter<number>();
  @Output() openModal = new EventEmitter<MouseEvent>();
  @Output() challengeActive = new EventEmitter<Challenge>()

  constructor() { }

  ngOnInit(): void {
    
  }
}
