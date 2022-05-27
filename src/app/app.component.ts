
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/apis/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Application Gramificacion';

  constructor(private configService:ConfigService){
    
    
  }
  
  ngOnInit(): void {
    
    // this.configService.getConfig();
  }
}