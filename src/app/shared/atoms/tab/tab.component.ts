import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';

@Component({
  selector: 'lu-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() tab!:Tab
  

}
