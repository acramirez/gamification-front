import { Component, Input } from '@angular/core';
import { Challenge } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'lu-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {

  /**
   * challenge data
   */
  @Input() challenge!:Challenge;
  /**
   * status mission
   */
  @Input() statusMission:boolean | undefined

}
