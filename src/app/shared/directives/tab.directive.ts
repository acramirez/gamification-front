import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Directive({
  selector: '[tabsDirective]'
})
export class TabDirective  {

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ) { }

  @Input() set tabsDirective(type:string){
    switch (type) {
      case 'tab':
        this.elementTab()
        break;
      case 'tab-container':
        this.elementTab()
        break;
      default:
        break;
    }
  }



  elementTab(){
    

    fromEvent(document,'click')
      .subscribe(event=>{

        this.isActive(event.target as HTMLElement)
      })
  }


  isActive(elementCheck:HTMLElement){
    const element=this.elementRef.nativeElement;
  
    if (elementCheck===element || element.contains(elementCheck)) {
      element.classList.add('active--tab')
    }else if (elementCheck.classList.contains('tab') || elementCheck.classList.contains('tab__text') || elementCheck.classList.contains('tab__icon')) {
      element.classList.remove('active--tab')
    }

  }

} 
