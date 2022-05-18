import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {

  constructor(
    private elementRef:ElementRef<HTMLButtonElement>,
  ) { }


  @HostListener('click') clickActive(){
    this.elementRef.nativeElement.classList.add('tab--active')

    console.log(this.elementRef.nativeElement);
  
  }

} 
