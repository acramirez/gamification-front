import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Subscriber, Subscription, timer } from 'rxjs';

@Component({
  selector: 'lu-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit  {

  timer$!:Subscription
  remainingDays!:number | string | null
  @Input() dueDate!:Date

  @Input() seconds!:number;

  ngAfterViewInit(): void {
    this.dueDate=new Date(this.dueDate)
    
    
    this.timer$=timer(0,1000).subscribe(()=>
    { 
      let time=this.getTime(this.dueDate)
      if(typeof time === 'number'){
        this.remainingDays= this.transformSeconds(time);
      }
    }
  );
    
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

  getTime(date:Date){    
    
      const currenDate=new Date().getTime()
      const dueDate=date.getTime();
  
      const result= dueDate-currenDate
      
      let days:number | string=result/(1000)
      
      return days
  }

}
