import { ComponentFactory, ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { Modal } from '../../interfaces/atoms/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalData!:Modal

  generateModal(container:ViewContainerRef,component:any){
    container.createEmbeddedView<any>(component)
  }
}
