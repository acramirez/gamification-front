import { Component, EventEmitter, Input, OnInit, Output, TemplateRef,ViewContainerRef } from '@angular/core';
import { Modal } from '../../interfaces/atoms/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closeModal:EventEmitter<boolean>= new EventEmitter();
  @Input() data:Modal={
    icon:'',
    btnClose:'Cerrar',
    title:'Titulo',
    subtitle:'subtitulo o descripción',
    body:[]
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }
  
}
