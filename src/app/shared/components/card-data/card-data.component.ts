import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/response/icard-details';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent {

  /**
   * Has the info which is used in the component
   *
   * @type {Card}
   * 
   */
  @Input() data!:Card
  @Input() percent:number=0

}
