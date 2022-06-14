import { ComponentFactory, ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { Modal } from '../../interfaces/atoms/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalData!:Modal

  generateModal(container:ViewContainerRef,component:any){
    console.log(container);
    console.log(component);
    
    
    container.createComponent<any>(component)
  }
}
