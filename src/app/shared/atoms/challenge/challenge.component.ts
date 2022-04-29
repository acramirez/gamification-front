import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sn-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  @Input() title:string=''
  @Input() icon:string=''
  @Input() status:boolean=false

  constructor() { }

  ngOnInit(): void {
  }


}
