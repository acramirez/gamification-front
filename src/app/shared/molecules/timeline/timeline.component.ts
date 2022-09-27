import { Component, Input, OnInit } from '@angular/core';
import { ITimeLineElement, statusElement } from './interface/itimeline-element';

@Component({
  selector: 'lu-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {


  /**
   * Time line elements
   */
  @Input() elements:ITimeLineElement[]=[
    {principalText:'Usa tu tarjeta',secondaryText:'Consume al menos $200 pesos al mes.',status:statusElement.COMPLETE},
    {principalText:'Paga tu tarjeta',secondaryText:'Paga puntualmente tu tarjeta conforme a tu fecha límite de pago.',status:statusElement.ONGOING},
    {principalText:'Trae tu nómina, domicilia el pago de tu tarjeta, solicita cargos recurrentes o activa una asistencia LikeU.',secondaryText:'Puede ser cualquiera de las cuatro opciones.',status:statusElement.NEXT},
    {principalText:'¡Listo!',secondaryText:'Habrás cumplido el Reto LikeU e incrementarás tu línea de crédito.',status:statusElement.NEXT},
  ]

  /**
   * Percent to time line
   */
  percent=0;

  /**
   * Direction time line horizontal vertical
   */
  direction='';

  /**
   * Life Cycle: Initialize percent
   */
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
