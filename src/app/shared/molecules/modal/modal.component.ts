import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';
import { Modal } from '../../interfaces/atoms/modal';
import { Challenge } from '../../interfaces/response/challengesContract.interface';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() closeModal:EventEmitter<boolean>= new EventEmitter();
  @Input() modal!:Modal
 
  constructor(
    private callback:GamificationCallbacksService,
  ){

  }
  
  redirect(){
    this.callback.redirect(this.modal.id)
  }
}
