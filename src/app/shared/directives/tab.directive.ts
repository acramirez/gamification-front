
import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Tab } from '../interfaces/atoms/tab.interface';

@Directive({
  selector: '[tabsDirective]'
})
export class TabDirective implements OnInit, OnDestroy  {

  // @Output() indexTab:EventEmitter<number> =new EventEmitter;
  
  sub!:Subscription
  @Input() tabData!:Tab;
  @Input() tabsData!:Tab[];
  @Input() initialTab!:number
  @Input() active!:boolean

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ) { }

  @Input() set tabsDirective(type:string){
    switch (type) {
      case 'tab':
        this.elementTab()
        break;
      case 'tabs-container':
        this.tabContainer()
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

  tabContainer(){

    this.elementRef.nativeElement.childNodes.forEach(child=>{
      
    })
  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement
    if (this.tabData && this.tabData.status==='ONGOING') {
      this.elementRef.nativeElement.classList.add('active--tab')
    }     
  }
  
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
} 
