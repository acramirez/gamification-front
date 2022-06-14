
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { GamificationCallbacksService } from './services/gamification-callbacks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private callback:GamificationCallbacksService
  ){}
  title = 'Application Gramificacion';

  refreshSession=fromEvent(document,'click')
    .subscribe(event=>{
      console.log(event);
      
      this.callback.refreshSession();
    })


}