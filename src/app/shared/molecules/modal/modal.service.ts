import { Injectable, ViewContainerRef } from '@angular/core';
import { FirstPageComponent } from '../../../pages/first-page/first-page.component';
import { MessageComponent } from '../../../pages/message/message.component';
import { Modal } from '../../interfaces/atoms/modal';
import { Notification } from '../../interfaces/notification';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalData!: Modal;

  /**
   * Generate modal into container
   * @param container Reference to container Modal
   * @param modalData Data Modal
   */
  generateModal(container: ViewContainerRef, modalData: Modal) {
    this.addEventScroll();
    const modal = container.createComponent<ModalComponent>(ModalComponent);
    modal.instance.modal = modalData;
  }

  /**
   * Generate notification into container
   * @param container Reference to container Modal
   * @param modalData Data Modal
   */
  generateNotification(container: ViewContainerRef, message: Notification) {
    this.addEventScroll();
    const notification =
      container.createComponent<MessageComponent>(MessageComponent);
    notification.instance.notification = message;
  }

  /**
   * Generate page first access into container
   * @param container Reference to container Modal
   * @param modalData Data Modal
   */
  generateFirstAccess(container: ViewContainerRef, close: Function) {
    this.addEventScroll();
    const firstAccess =
      container.createComponent<FirstPageComponent>(FirstPageComponent);
    firstAccess.instance.close = close;
  }

  /**
   * Close modal, notification or page
   * @param container Reference to container Modal
   */
  close(container: ViewContainerRef) {
    this.removeScroll();
    container.clear();
  }

  /**
   * Disable scrooll
   */
  disableScroll() {
    window.scrollTo(0, 0);
  }

  /**
   * Restore scroll
   */
  addEventScroll() {
    window.addEventListener('scroll', this.disableScroll);
  }

  /**
   * remove scroll
   */
  removeScroll() {
    window.removeEventListener('scroll', this.disableScroll);
  }
}
