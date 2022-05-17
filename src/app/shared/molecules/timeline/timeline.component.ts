import { Component, Input, OnInit } from '@angular/core';
import { ITimeLineElement, statusElement } from './interface/itimeline-element';

@Component({
  selector: 'sn-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() elements:ITimeLineElement[]=[
    {principalText:'Usa tu tarjeta',secondaryText:'Gasta $500 pesos al mes.',status:statusElement.COMPLETE},
    {principalText:'Paga tu tarjeta',secondaryText:'Paga puntualmente tu tarjeta antes de tu fecha límite.',status:statusElement.ONGOING},
    {principalText:'Trae tu nómina, domicilia tu tarjeta o contrata una asistencia',secondaryText:'Puede ser cualquiera de las tres opciones.',status:statusElement.NEXT},
    {principalText:'¡Listo!',secondaryText:'Lograste tu objetivo mensual e incrementaste tu línea de crédito.',status:statusElement.NEXT},
  ]

  percent:number=0;

  direction:string='';

  ngOnInit(): void {

    const percent=(100/this.elements.length);
    console.log(percent);
    

    this.elements.forEach(el=>{
      if(el.status==='COMPLETE')
        this.percent+=percent;
        this.percent+=0.6
      });
      
  }

}
