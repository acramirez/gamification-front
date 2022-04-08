import { Component, OnInit } from '@angular/core';
import { SsoFacade } from './services/facades/sso.facade';
import { SsoService } from './services/sso.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Application Gramificacion';
  constructor(private ssoFacade:SsoFacade){
  }
  ngOnInit(): void {
    this.ssoFacade.validationToken().subscribe(
      console.log
      
    )
  }


}