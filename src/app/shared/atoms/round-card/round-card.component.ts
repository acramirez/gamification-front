import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sn-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.css']
})
export class RoundCardComponent implements OnInit {

  @Input() principalText!:string | number;
  @Input() secondaryText!:string;

  constructor() { }

  ngOnInit(): void {

    
  }

}
