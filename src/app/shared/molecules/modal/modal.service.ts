import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { MessageComponent } from 'src/app/pages/message/message.component';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';
import { Modal } from '../../interfaces/atoms/modal';
import { Notification } from '../../interfaces/notification';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private componentFR:ComponentFactoryResolver,
  ){
  }

  modalData!:Modal
  

  generateModal(container:ViewContainerRef, modalData:Modal){

    console.log(modalData);

    const factory = this.componentFR.resolveComponentFactory<any>(ModalComponent)
    const modal= container.createComponent<any>(factory)
    modal.instance.modal=modalData
  }

  generateNotification(container:ViewContainerRef,message:Notification){

    const factory = this.componentFR.resolveComponentFactory<any>(MessageComponent)
    const notification= container.createComponent<any>(factory)
    notification.instance.notificacion=message

  }

  close(container:ViewContainerRef){    
    container.clear()
  }
}
