import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';

@Component({
  selector: 'lu-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tab:Tab={texto:'',status:''}
  icon:string='';

  constructor() { }

  ngOnInit(): void {
    switch (this.tab.status) {
      case 'FINISHED':
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
