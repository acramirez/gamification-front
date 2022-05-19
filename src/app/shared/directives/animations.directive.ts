import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[animation]'
})
export class AnimationsDirective {

  constructor(
    private element:ElementRef<HTMLElement>
  ) { }

  height!:number;

  @Input() set animation(direction:string){

    switch (direction) {
      case 'downUp':
        this.downUp()
        break;
      case 'zoomIn':
        this.zoomIn()
        break;
      
      default:
        break;
    }
  }

  downUp(){
    this.element.nativeElement.classList.add('downUp')
    setTimeout(() => {
      this.element.nativeElement.style.bottom='0'
    }, 300);
  }
  
  zoomIn(){    
    this.element.nativeElement.classList.add('zoomIn')
  }

  @Input() set rotate(deg:number){
    this.element.nativeElement.classList.add('rotate')
    this.element.nativeElement.style.transform=`rotate(${deg}deg)`
  }

  @Input() set dropDown(active:boolean){
    
    if (!active) {
      this.height=this.element.nativeElement.clientHeight
      this.element.nativeElement.classList.add('drop-down-hidden')
      console.log(this.height);
      
    }else{
      this.element.nativeElement.classList.add('drop-down-hidden')
      this.element.nativeElement.style.height= `${this.height.toString()}px`
    }
  }

  @Input() set loadProgress(progress:number){
    this.element.nativeElement.classList.add('transition')
    this.element.nativeElement.style.strokeDashoffset='295.31';
    setTimeout(() => {
      this.element.nativeElement.style.strokeDashoffset=progress.toString();
    }, 0);
  }
}



