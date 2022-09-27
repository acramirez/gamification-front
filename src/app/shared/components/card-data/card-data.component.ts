import { AfterViewInit, Component, Input } from '@angular/core';
import { Card } from '../../interfaces/response/icard-details';

@Component({
  selector: 'lu-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css'],
})
export class CardDataComponent implements AfterViewInit {
  /**
   * property to save potential limit, current limit and lower limit
   */
  @Input() data!: Card;
  /**
   * property to save percent value
   */
  @Input() percent = 0;

  /**
   * AfterViewInit life cycle: Component loading view start.
   * Match current limit and potentiaal limit if current_limit>potential_limit
   * @returns void
   */
  ngAfterViewInit(): void {
    if (this.data.current_limit > this.data.potential_limit) {
      this.data.current_limit = this.data.potential_limit;
    }
  }
}
