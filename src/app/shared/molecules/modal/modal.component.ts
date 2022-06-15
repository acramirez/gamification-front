import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';
import { Challenge } from '../../interfaces/response/challengesContract.interface';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() closeModal:EventEmitter<boolean>= new EventEmitter();
  @Input() challenge!:Challenge
  
  constructor(
    private callback:GamificationCallbacksService,
    private modalService:ModalService
  ){

  }
  
  redirect(){
    console.log(this.challenge);
    
    this.callback.redirect(this.challenge.id)
  }

  close(){
    this.modalService.closeModal()
  }


}
