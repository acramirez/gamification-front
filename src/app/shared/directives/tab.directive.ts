
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Tab } from '../interfaces/atoms/tab.interface';

@Directive({
  selector: '[tabsDirective]'
})
export class TabDirective implements OnInit, OnDestroy  {

  // @Output() indexTab:EventEmitter<number> =new EventEmitter;

  sub$!:Subscription
  @Input() tabData!:Tab;
  @Input() tabsData!:Tab[];
  @Input() initialTab!:number
  @Input() active!:boolean

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ) { }

  @Input() set tabsDirective(type:string){

    if (type==='tab') {
      this.elementTab()

    }
  }

  elementTab(){
    this.sub$ = fromEvent(document,'click')
      .subscribe(event=>{
        this.isActive(event.target as HTMLElement)
      })
  }

  isActive(elementCheck:HTMLElement){
    const element=this.elementRef.nativeElement;

    if (elementCheck===element || element.contains(elementCheck)) {
      element.children[0].classList.add('active--tab')
    }else if (elementCheck.classList.contains('tab') || elementCheck.classList.contains('tab__text') || elementCheck.classList.contains('tab__icon')) {
      element.children[0].classList.remove('active--tab')
    }
  }

  ngOnInit(): void {
    if (this.tabData && this.tabData.status==='ONGOING') {
      this.elementRef.nativeElement.children[0].classList.add('active--tab')
    }
  }

  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }
}
