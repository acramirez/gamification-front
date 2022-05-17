import { Component, Input } from '@angular/core';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'sn-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent{

  @Input() challenge!:Challenge;

}
