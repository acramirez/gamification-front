import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() closeModal:EventEmitter<boolean>= new EventEmitter();
  @Input() challenge!:Challenge
  @ViewChild('modal',{read:TemplateRef}) modal !:TemplateRef<HTMLElement>

  constructor(
    private callback:GamificationCallbacksService,
  ){

  }
  
  redirect(){
    console.log(this.challenge);
    
    this.callback.redirect(this.challenge.id)
  }


}
