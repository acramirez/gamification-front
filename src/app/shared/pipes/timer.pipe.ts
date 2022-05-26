import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(segundos: number): string {
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
