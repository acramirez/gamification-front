import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { FirstPageComponent } from 'src/app/pages/first-page/first-page.component';
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

    const factory = this.componentFR.resolveComponentFactory<ModalComponent>(ModalComponent)
    const modal= container.createComponent<ModalComponent>(factory)
    modal.instance.modal=modalData
  }

  generateNotification(container:ViewContainerRef,message:Notification){
    const factoryNotification = this.componentFR.resolveComponentFactory<MessageComponent>(MessageComponent)
    const notification= container.createComponent<MessageComponent>(factoryNotification)
    notification.instance.notification=message
  }
  generateFirstAccess(container:ViewContainerRef){
    const factoryNotification = this.componentFR.resolveComponentFactory<FirstPageComponent>(FirstPageComponent)
    container.createComponent<FirstPageComponent>(factoryNotification)
  }

  close(container:ViewContainerRef){    
    container.clear()
  }
}
