import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription, timer } from 'rxjs';

@Component({
  selector: 'lu-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit,OnDestroy  {

  timer$!:Subscription
  remainingDays!:number | string | null
  @Input() seconds!:number;

  constructor() { }

  ngAfterViewInit(): void {
    this.timer$=timer(0,1000).subscribe(()=>
      {            
        let time=this.seconds
        this.remainingDays= this.transformSeconds(time);

        console.log('2');
      }
    );

  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.timer$.unsubscribe()
    }, 1000);
  }

  transformSeconds(segundos:number){
    let hour:number | string= Math.floor(segundos/3600)
    hour=(hour<10)?'0' + hour:hour
    let minutes:number | string= Math.floor((segundos/60)%60)
    minutes=(minutes<10)?'0' + minutes:minutes
    let seconds:number | string= Math.floor(segundos%60)
    seconds=(seconds<10)?'0' + seconds:seconds

    let resp=''
    if (segundos<0) {
      resp = Math.round(segundos/(60 * 60 * 24)) + ' días'
    } else if (typeof hour === 'number' && hour>=24) {
      resp = Math.round(hour/24) + ' días'
    }else if(hour==0){
      resp = hour + ':' + minutes + ':' + seconds +' min'
    }else if(hour==0  && minutes == 0){
      resp = hour + ':' + minutes + ':' + seconds +' sec'
    }else{
      resp = hour + ':' + minutes + ':' + seconds +' hrs'
    }
    return resp
  }

}
