import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-modal-challenges',
  templateUrl: './modal-challenges.component.html',
  styleUrls: ['./modal-challenges.component.css']
})
export class ModalChallengesComponent implements OnInit {

  @Output() switchModal:EventEmitter<boolean>=new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {    
  }

  closeModal(){
    this.switchModal.emit(false)    
  }
  

}
