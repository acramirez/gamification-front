import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'sn-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css'],
})
export class CircleProgressComponent{
  /**
   * percent value
   */
  @Input() percent!: number;
  /**
   * icon to show
   */
  @Input() icon = '';
  /**
   * circunference svg
   */
  circunference = 295.31;

}
