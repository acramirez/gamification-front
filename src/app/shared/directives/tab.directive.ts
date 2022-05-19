import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Directive({
  selector: '[tabs-container]'
})
export class TabDirective implements AfterViewInit {

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ) { }

  ngAfterViewInit(): void {
  

  }

  @Input() set activeTab(index:number){
    

    fromEvent(document,'click')
      .subscribe(event=>{

        this.isActive(event.target as HTMLElement)
      })
  }


  isActive(elementCheck:HTMLElement){
    const children=this.elementRef;

    if (elementCheck===this.elementRef.nativeElement || this.elementRef.nativeElement.contains(elementCheck)) {
      this.elementRef.nativeElement.classList.add('active--tab')
    }else{
      this.elementRef.nativeElement.classList.remove('active--tab')
    }

  }

} 
