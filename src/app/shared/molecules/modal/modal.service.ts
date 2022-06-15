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

  generateModal(container:ViewContainerRef,component:any){
    console.log(component);
    
    const modal=new ModalComponent(this.gamificationCS)
    // modal.challenge=challenge
    const factory = this.componentFR.resolveComponentFactory<any>(component)
    component=container.createComponent<any>(factory)
    console.log(component);

  }
}
