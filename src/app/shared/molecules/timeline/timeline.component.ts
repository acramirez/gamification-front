import { Component, Input, OnInit } from '@angular/core';
import { ITimeLineElement, statusElement } from './interface/itimeline-element';

@Component({
  selector: 'sn-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() elements:ITimeLineElement[]=[
    {text:'ene',status:statusElement.COMPLETE},
    {text:'feb',status:statusElement.COMPLETE},
    {text:'mar',status:statusElement.COMPLETE},
    {text:'Abr',status:statusElement.ONGOING},
    {text:'Jun',status:statusElement.NEXT},
    {text:'May',status:statusElement.NEXT},
  ]

  percent:number=0;

  constructor() { }

  ngOnInit(): void {

    const percent=Math.round(100/this.elements.length);

    this.elements.forEach(el=>{
      if(el.status==='COMPLETE')
        this.percent+=percent
    })
  }

}
