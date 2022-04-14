import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { TokenSsoFacade } from './services/facades/sso.facade';
=======
import { GamificationFacade } from './services/facades/gamifications.facade';
import { TokenOauthFacade } from './services/facades/token-oauth.facade';
>>>>>>> 147b34ea9b10d2df747c41fe2dde97f66dc363fd

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