import { Component, Input } from '@angular/core';

@Component({
  selector: 'sn-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.css']
})
export class RoundCardComponent{

  /**
   * property to show principal text or number
   */
   @Input() principalText!:string | number;
   /**
    * property to show second text
    */
   @Input() secondaryText!:string;

}
