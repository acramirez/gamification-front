import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../interfaces/atoms/tab.interface';

@Component({
  selector: 'lu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input() tabs!:Tab[];


}
