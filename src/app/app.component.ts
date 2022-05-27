
import { Component } from '@angular/core';
import { ConfigService } from './services/apis/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Application Gramificacion';

  constructor(private configService:ConfigService){
    
    this.configService.getConfig();

  }
}