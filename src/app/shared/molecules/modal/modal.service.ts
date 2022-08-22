import { Injectable, ViewContainerRef } from '@angular/core';
import { FirstPageComponent } from '../../../pages/first-page/first-page.component';
import { MessageComponent } from '../../../pages/message/message.component';
import { Modal } from '../../interfaces/atoms/modal';
import { Notification } from '../../interfaces/notification';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
  ){
  }

  modalData!:Modal


  generateModal(container:ViewContainerRef, modalData:Modal){

    this.addEventScroll();
    const modal= container.createComponent<ModalComponent>(ModalComponent)
    modal.instance.modal=modalData

  }

  generateNotification(container:ViewContainerRef,message:Notification){
    this.addEventScroll();
    const notification= container.createComponent<MessageComponent>(MessageComponent)
    notification.instance.notification=message
  }
  generateFirstAccess(container:ViewContainerRef,close:Function){
    this.addEventScroll();
    const firstAccess=container.createComponent<FirstPageComponent>(FirstPageComponent)
    firstAccess.instance.close=close
  }

  close(container:ViewContainerRef){
    this.removeScroll();
    container.clear()

  }

  disableScroll(){
    window.scrollTo(0,0)
  }

  addEventScroll(){
    window.addEventListener('scroll',this.disableScroll)
  }

  removeScroll(){
    window.removeEventListener('scroll',this.disableScroll)
  }
}
