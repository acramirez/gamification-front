import { Component, Input, OnInit } from '@angular/core';
import { ITimeLineElement, statusElement } from './interface/itimeline-element';

@Component({
  selector: 'sn-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() elements:ITimeLineElement[]=[
    {text:'May',status:statusElement.COMPLETE},
    {text:'ene',status:statusElement.ONGOING},
    {text:'May',status:statusElement.NEXT},
    {text:'May',status:statusElement.NEXT},
    {text:'May',status:statusElement.NEXT},
    {text:'May',status:statusElement.NEXT},
  ]

  percent:number=0;

  constructor() { }

  ngOnInit(): void {

    const percent=(100/this.elements.length);
    console.log(percent);
    

    this.elements.forEach(el=>{
      if(el.status==='COMPLETE')
        this.percent+=percent
    });

  }

}
