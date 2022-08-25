import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'lu-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements AfterViewInit, OnDestroy {
  timer$: Subject<boolean> = new Subject();
  remainingDays!: number | string | null;
  @Input() dueDate!: Date;

  @Input() seconds!: number;

  ngAfterViewInit(): void {
    this.dueDate = new Date(this.dueDate);

    timer(0, 1000)
      .pipe(takeUntil(this.timer$))
      .subscribe(() => {
        let time = this.getTime(this.dueDate);
        if (typeof time === 'number' && time > 0) {
          this.remainingDays = this.transformSeconds(time);
        } else {
          this.remainingDays = '0 dias';
        }
      });
  }

  transformSeconds(segundos: number) {
    let hour: number | string = Math.floor(segundos / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    let minutes: number | string = Math.floor((segundos / 60) % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds: number | string = Math.floor(segundos % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let resp = '';
    if (segundos < 0) {
      resp = Math.round(segundos / (60 * 60 * 24)) + ' días';
    } else if (typeof hour === 'number' && hour >= 24) {
      resp = Math.round(hour / 24) + ' días';
    } else if (hour == 0) {
      resp = hour + ':' + minutes + ':' + seconds;
    } else if (hour == 0 && minutes == 0) {
      resp = hour + ':' + minutes + ':' + seconds;
    } else {
      resp = hour + ':' + minutes + ':' + seconds;
    }

    return resp;
  }

  getTime(date: Date) {
    const currenDate = new Date().getTime();
    const dueDate = date.getTime();

    const result = dueDate - currenDate;

    return result / 1000;

  }

  ngOnDestroy(): void {
    this.timer$.next(true);
    this.timer$.complete();
  }
}
