import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[animation]'
})
export class AnimationsDirective implements AfterViewInit {



  constructor(
    private element:ElementRef<HTMLElement>
  ) { }

  @Input() height:number=0
  @Input() set animation(direction:string){

    switch (direction) {
      case 'up':
        this.downUp()
        break;
      case 'zoomIn':
        this.zoomIn()
        break;
      case 'dropDown':
        break;
      
      default:
        break;
    }
  };

  downUp(){
    this.element.nativeElement.style.bottom='-100%'
    setTimeout(() => {
      this.element.nativeElement.style.bottom='0'
    }, 3000);
  }
  
  zoomIn(){    
    this.element.nativeElement.classList.add('zoomIn')
  }

  ngAfterViewInit(): void {
    this.height=this.element.nativeElement.clientHeight

  }

  @Input() set dropDown(active:boolean){

    if (!active) {
      this.element.nativeElement.classList.add('drop-down-hidden')
      this.element.nativeElement.style.height= '0'       
      
    }else if(this.height>0){
      this.element.nativeElement.style.height= `${this.height.toString()}px`
    }
     
  }
}
