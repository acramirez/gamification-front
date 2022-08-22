import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscriber, Subscription, timer } from 'rxjs';

@Component({
  selector: 'lu-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  timer$!: Subscription;
  remainingDays!: {
    firstText: string;
    secondText: string;
  };
  @Input() dueDate!: Date;

  @Input() seconds!: number;

  transformSeconds() {
    let time = this.getTime(this.dueDate);

    let hour: number | string = Math.floor(time / 3600);
    hour = hour < 10 ? '0' + hour : hour;

    let days = Math.ceil(Number(hour) / 24)
    if (days >= 24) {
      this.remainingDays = {
        firstText: 'Faltan:',
        secondText: days + ' días',
      };
    } else if (days === 1) {
      this.remainingDays = {
        firstText: 'Falta:',
        secondText: days + ' día',
      };
    } else {
      this.remainingDays = {
        firstText: 'Faltan:',
        secondText: '0 días',
      };
    }
  }

  getTime(date: Date) {
    const currenDate = new Date().getTime();
    const dueDate = date.getTime();

    const result = dueDate - currenDate;

    let days: number | string = result / 1000;

    return days;
  }
}
