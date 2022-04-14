import { Component, OnInit } from '@angular/core';

import { TokenSsoFacade } from './services/facades/sso.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Application Gramificacion';
  
  constructor(
      private tokenFacade: TokenSsoFacade
    ) {}
  
  ngOnInit(): void { 

    this.tokenFacade.validationToken().subscribe(
      console.log
    );
    //this.ssoFacade.validationToken().subscribe(
    //  console.log
      
    //)
  }


}