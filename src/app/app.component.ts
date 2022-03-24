import { Component, OnInit } from '@angular/core';
import { GamificationFacade } from './services/facades/gamification.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Application Gramificacion';

  constructor( private gamificacionFacade: GamificationFacade ) {}

  ngOnInit(): void {
    this.gamificacionFacade.response.subscribe(resp => {
      console.log(resp.data);
    });
  }

}
