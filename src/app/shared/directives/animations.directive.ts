import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[animation]'
})
export class AnimationsDirective {

  constructor(
    private element:ElementRef<HTMLElement>
  ) { }

  height!:number;
  deg!:number

  @Input() set animation(direction:string){

    switch (direction) {
      case 'downUp':
        this.downUp()
        break;
      case 'zoomIn':
        this.zoomIn()
        break;
      case 'rotate':
        this.rotate()
        break;
      
      default:
        break;
    }
  };

  downUp(){
    this.element.nativeElement.classList.add('downUp')
    setTimeout(() => {
      this.element.nativeElement.style.bottom='0'
    }, 300);
  }
  
  zoomIn(){    
    this.element.nativeElement.classList.add('zoomIn')
  }
  
  rotate(){
    if(this.deg){
      this.element.nativeElement.style.transform=`${this.deg}deg`
    }
  }

  @Input() set dropDown(active:boolean){

    const h = this.height;
    
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
    this.element.nativeElement.style.strokeDashoffset=progress.toString();

  }
}



