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
    let time = this.getTime(new Date('2022-08-20'));

    let hour: number | string = Math.floor(time / 3600);
    hour = hour < 10 ? '0' + hour : hour;

    let resp = '';
    if (typeof hour === 'number' && hour >= 24) {
      resp = Math.ceil(hour / 24) + ' días';
      this.remainingDays = {
        firstText: 'Faltan:',
        secondText: resp,
      };
    } else {
      resp = Math.ceil(Number(hour) / 24) + ' día';
      this.remainingDays = {
        firstText: 'Falta:',
        secondText: resp,
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
