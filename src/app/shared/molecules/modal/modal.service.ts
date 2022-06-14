import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { Modal } from '../../interfaces/atoms/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalData!:Modal

  generateModal(container:ViewContainerRef,modal:TemplateRef<HTMLElement>){
    console.log(container);
    console.log(modal);
    
    
    container.createEmbeddedView<any>(modal)
  }
}
