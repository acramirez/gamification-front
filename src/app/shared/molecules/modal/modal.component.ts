import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() closeModal:EventEmitter<boolean>= new EventEmitter();
  @Input() data!:Challenge
  
}
