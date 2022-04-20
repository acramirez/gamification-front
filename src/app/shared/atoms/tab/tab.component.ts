import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';

@Component({
  selector: 'lu-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tab!:Tab
  icon!:string;

  constructor() { }

  ngOnInit(): void {
    switch (this.tab.status) {
      case 'FINISH':
        this.icon='check'
        break;
      case 'ONGOING':
        this.icon='clock'
        break;
      default:
        this.icon='lock'
        break;
    }
  }

}
