import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[animation]'
})
export class AnimationsDirective {


  constructor(
    private element:ElementRef<HTMLElement>
  ) { }

  @Input() origin!:string;
  @Input() set animation(direction:string){

    switch (direction) {
      case 'up':
        this.downUp()
        break;
      case 'zoomIn':
        this.zoomIn()
        break;
      
      default:
        break;
    }
    if (direction==='up') {
    }
  };

  selectAnimation(){

  }

  downUp(){
    this.element.nativeElement.style.bottom='-100%'
    setTimeout(() => {
      this.element.nativeElement.style.bottom='0'
    }, 300);
  }
  

  zoomIn(){
    this.element.nativeElement.classList.add('zoomIn')
  }



}
