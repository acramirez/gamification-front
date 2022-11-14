import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'lu-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements AfterViewInit, OnDestroy {
  /**
   * Subject to unsubscribe the timer$
   */
  timer$: Subject<boolean> = new Subject();

  /**
   * Text remaining days or remainings days
   */
  remainingDays!: number | string | null;

  /**
   * Text to timer ('Faltan:' o Falta:)
   */
  remaining:string='Faltan:'

  /**
   * due date to evaluate challenges
   */
  @Input() dueDate!: Date;

  /**
   * AfterViewInit life cycle: Component loading view start.
   * Initializes the subscriptions of timer, dueDate
   * @returns void
   */
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

  /**
   * Function to transform seconds in string of remaining days, hours, minutes or seconds
   * @param segundos remaining seconds
   * @returns string
   */
  transformSeconds(segundos: number) {
    let hour: number | string = Math.floor(segundos / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    let minutes: number | string = Math.floor((segundos / 60) % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds: number | string = Math.floor(segundos % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let resp = '';
    if (typeof hour === 'number' && hour >= 18) {
      resp= this.setDays(hour)
    } else if (hour == 0) {
      resp = hour + ':' + minutes + ':' + seconds;
    } else if (hour == 0 && minutes == 0) {
      resp = hour + ':' + minutes + ':' + seconds;
    } else {
      resp = hour + ':' + minutes + ':' + seconds;
    }
    return resp;
  }

  /**
   * Function to get remaining seconds between current date and param date
   * @param date due date
   * @returns number
   */
  getTime(date: Date) {
    const currenDate = new Date().getTime();
    const dueDate = date.getTime();

    const result = dueDate - currenDate;

    return result / 1000;
  }

  /**
   *
   * @param hours remaining hours
   * @returns string with correct word
   */
  setDays(hours:number){
    const days =Math.round(hours / 24)
    let resp=''
    if (days===1) {
      this.remaining='Falta: '
      return resp=days + ' día'
    }
    return resp=days + ' días'

  }

  /**
   * onDestroy life cycle:
   * Unsubscribe timer$
   * @returns void
   */
  ngOnDestroy(): void {
    this.timer$.next(true);
    this.timer$.complete();
    this.timer$.unsubscribe()
  }
}
