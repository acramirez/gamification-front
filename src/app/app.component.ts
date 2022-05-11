import { Component, OnInit } from '@angular/core';
import { ErrorService } from './services/apis/error.service';

import { TokenSsoFacade } from './services/facades/sso.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Application Gramificacion';

}