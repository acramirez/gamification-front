import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Tab } from '../interfaces/atoms/tab.interface';

@Directive({
  selector: '[tabsDirective]'
})
export class TabDirective implements OnInit, OnDestroy  {

  @Output() indexTab:EventEmitter<number> =new EventEmitter;
  
  sub!:Subscription
  @Input() tabData!:Tab;
  @Input() tabsData!:Tab[];

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ) { }

  @Input() set tabsDirective(type:string){
    switch (type) {
      case 'tab':
        this.elementTab()
        break;
      default:
        break;
    }
  }

  elementTab(){
    this.sub = fromEvent(document,'click')
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

  ngOnInit(): void {
    if (this.tabData && this.tabData.status==='ONGOING') {
      console.log(this.elementRef.nativeElement.offsetLeft);
      this.elementRef.nativeElement.classList.add('active--tab')
    }
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

} 