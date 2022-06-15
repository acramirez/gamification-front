import { ComponentFactory, ComponentFactoryResolver, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';
import { Modal } from '../../interfaces/atoms/modal';
import { Challenge } from '../../interfaces/response/challengesContract.interface';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private componentFR:ComponentFactoryResolver,
    private gamificationCS:GamificationCallbacksService
  ){

  }

  modalData!:Modal

  generateModal(container:ViewContainerRef,challenge:Challenge){

    const factory = this.componentFR.resolveComponentFactory<ModalComponent>(ModalComponent)
    const modal= container.createComponent<ModalComponent>(factory)
    modal.instance.challenge=challenge

  }
}
