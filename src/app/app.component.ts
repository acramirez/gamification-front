import { Component, OnInit } from '@angular/core';
import { GamificationFacade } from './services/facades/gamifications.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Application Gamification';

  constructor( ) {}

  ngOnInit(): void {


  }

}
