import { Component, Input, OnInit } from '@angular/core';
import { ITimeLineElement, statusElement } from './interface/itimeline-element';

@Component({
  selector: 'sn-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() elements:ITimeLineElement[]=[
    {principalText:'Usa tu tarjeta',secondaryText:'Consume $200 MXN al mes.',status:statusElement.COMPLETE},
    {principalText:'Paga tu tarjeta',secondaryText:'Paga puntualmente tu tarjeta conforme a tu fecha límite de pago.',status:statusElement.ONGOING},
    {principalText:'Trae tu nómina, domicilia el pago de tu tarjeta, solicita cargos regurrentes o activa una asistencia LikeU.',secondaryText:'Puede ser cualquiera de las cuatro opciones.',status:statusElement.NEXT},
    {principalText:'¡Listo!',secondaryText:'Lograrás tu objetivo e incrementaste tu línea de crédito.',status:statusElement.NEXT},
  ]

  percent:number=0;

  direction:string='';

  ngOnInit(): void {

    const percent=(100/this.elements.length);

    this.elements.forEach(el=>{
      if(el.status==='COMPLETE'){
        this.percent+=percent;
        this.percent+=0.6
      }
      });

  }

}
