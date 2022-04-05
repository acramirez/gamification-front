import { Component } from '@angular/core';
import { SsoService } from './shared/services/sso.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Application Gramificacion';
  constructor(private ssoService:SsoService){
    this.ssoService.validarToken('qwwwqwhchaq')
  }
}