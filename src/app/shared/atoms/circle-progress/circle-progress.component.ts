import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sn-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {


  @Input() percent=0;
  @Input() icon='';
  circunference=295.31;
  strokeDashoffset=0;

  ngOnInit(): void {
    this.percent= this.percent/100;
    this.strokeDashoffset=this.circunference*(1-this.percent)
  }

}
