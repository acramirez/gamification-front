import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';

@Component({
  selector: 'lu-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tab!:Tab
  

  ngOnInit(): void {
    console.log(this.tab);
    
    // switch (this.tab.status) {
    //   case 'FINISH':
    //     this.icon='Activa_tu_tarjeta'
    //     break;
    //   case 'ONGOING':
    //     this.icon='Pagos_recurrentes'
    //     break;
    //   default:
    //     this.icon='lock'
    //     break;
    // }    
  }

}
