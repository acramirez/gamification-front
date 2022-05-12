import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'sn-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {


  @Input() challenge!:Challenge;
  constructor() { }

  ngOnInit(): void {
  }

}
