import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'app-month-challenges',
  templateUrl: './month-challenges.component.html',
  styleUrls: ['./month-challenges.component.css']
})
export class MonthChallengesComponent implements AfterViewInit {

  @Input() mandatoryChallenges!:Challenge[];
  @Input() optionalChallenges!:Challenge[];

  @Input() tabs:Tab[]=[]
  @Input() activeTab:number=0
  @Input() days!:Number | null

  @Output() indexTab = new EventEmitter<number>();
  @Output() openModal = new EventEmitter<MouseEvent>();
  @Output() challengeActive = new EventEmitter<Challenge>()

  @ViewChild('tab') scrollTabs!:ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    this.scrollTabs.nativeElement.scrollLeft=this.activeTab*132
  }
}
