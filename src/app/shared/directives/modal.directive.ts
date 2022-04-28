import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class ModalDirective implements OnInit {

  htmlElement!:ElementRef<HTMLElement>

  @Input() set show(condicion:boolean){
    (condicion)
    ?this.viewContainer.createEmbeddedView(this.templateRef)
    :this.viewContainer.clear();
  }

  constructor(
    private templateRef:TemplateRef<HTMLElement>,
    private viewContainer:ViewContainerRef
  ) { 
    this.htmlElement=this.templateRef.elementRef
  }
  ngOnInit(): void {
    
  }


  closeModal(){
    
  }

}
