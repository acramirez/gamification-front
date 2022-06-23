
import { Component, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { GamificationCallbacksService } from './services/gamification-callbacks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {

  constructor(
    private callback:GamificationCallbacksService
  ){}
  title = 'Application Gramificacion';

  refreshSession=fromEvent(document,'click')
    .subscribe(event=>{   
      this.callback.refreshSession();
    })

    ngOnDestroy(): void {
      if (this.refreshSession) {
        this.refreshSession.unsubscribe()
      }
    }
}