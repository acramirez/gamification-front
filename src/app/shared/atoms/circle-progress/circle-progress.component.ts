import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sn-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {


  @Input() percent:number=0;
  @Input() icon:string='';
  circunference:number=295.31;
  strokeDashoffset:number=0;

  constructor() { }

  ngOnInit(): void {
    this.percent= this.percent/100;
    this.strokeDashoffset=this.circunference*(1-this.percent)
  }

}
