import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[currentTab]'
})
export class TabsDirective {

  @Input() set currentTab(page:number){

    let scroll = page*122
    console.log(this.elementRef.nativeElement);
    
    this.elementRef.nativeElement.scrollLeft=scroll
    console.log(this.elementRef.nativeElement.scrollLeft);
    
  }

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ) { }

}
