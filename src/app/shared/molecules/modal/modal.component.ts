import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamificationCallbacksService } from '../../../services/gamification-callbacks.service';
import { Modal } from '../../interfaces/atoms/modal';

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
    this.callback.redirect(this.modal.challenge.id)
  }
}
