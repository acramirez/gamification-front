import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[timer]'
})
export class TimerDirective {

  constructor() { }

  @Input() set timer(tiem:number){

  }

}
