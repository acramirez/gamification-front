import { Component, Input, OnInit } from '@angular/core';
import { Notification } from "../../shared/interfaces/notification";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() notification!:Notification
  
}
