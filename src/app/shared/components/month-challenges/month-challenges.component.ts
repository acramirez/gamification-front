import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';
import { MissionInterfaces } from '../../interfaces/mission-interfaces';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'app-month-challenges',
  templateUrl: './month-challenges.component.html',
  styleUrls: ['./month-challenges.component.css'],
})
export class MonthChallengesComponent implements AfterViewInit {
  /**
   * property to show special challenges
   */
  @Input() specialChallenges: Challenge[] = [];

  /**
   * tabs array
   */
  @Input() tabs: Tab[] = [];

  /**
   * property to assign style for initial tab
   */
  @Input() initialTab = 0;

  /**
   * due date for timer
   */
  @Input() dueDate!: Date;

  /**
   * challenges and data to show
   */
  @Input() mission!: MissionInterfaces;

  /**
   * property to assign style tab active
   */
  @Input() activeTab!: number;

  /**
   *Property emit indextab
   */
  @Output() indexTab = new EventEmitter<number>();

  /**
   * Property emit open modal
   */
  @Output() openModal = new EventEmitter<MouseEvent>();

  /**
   * property emit challenge active
   */
  @Output() challengeActive = new EventEmitter<Challenge>();

  /**
   * tabs container
   */
  @ViewChild('tabsContainer') scrollTabs!: ElementRef<HTMLDivElement>;

  /**
   * AfterViewInit life cycle: Component loading view start.
   * Initializes the scroll
   * @returns void
   */
  ngAfterViewInit(): void {
    const element = this.scrollTabs.nativeElement;

    this.scrollTabs.nativeElement.scrollLeft =
      this.initialTab * (element.firstElementChild!.clientWidth + 6);
  }
}
