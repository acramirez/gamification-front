import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { GamificationFacade } from './services/facades/gamifications.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Application Gamification';

  constructor( private gamificacionFacade: GamificationFacade ) {}

  ngOnInit(): void {
    this.gamificacionFacade.getCard().subscribe(resp => {
      console.log(resp);
    });

    this.gamificacionFacade.getPeriodDetails().subscribe(resp => {
      console.log(resp);
    });

  }

}
