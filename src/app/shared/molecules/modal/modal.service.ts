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
  container!:ViewContainerRef
  

  generateModal(container:ViewContainerRef,challenge:Challenge,component:any){
    this.container=container
    const factory = this.componentFR.resolveComponentFactory<any>(component)
    const modal= container.createComponent<any>(factory)
    modal.instance.challenge=challenge

  }

  closeModal(){
    console.log(this.container);
    
    this.container.clear()
  }
}
