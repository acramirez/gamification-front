import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sn-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css'],
})
export class CircleProgressComponent implements OnInit {
  /**
   * percent value
   */
  @Input() percent = 0;
  /**
   * icon to show
   */
  @Input() icon = '';
  /**
   * circunference svg
   */
  circunference = 295.31;
  /**
   * strokeDashoffset svg
   */
  strokeDashoffset = 0;

  /**
   * Lifecycle: initialize percent and circunference
   */
  ngOnInit(): void {
    this.percent = this.percent / 100;
    this.strokeDashoffset = this.circunference * (1 - this.percent);
  }
}
