import { Component } from '@angular/core';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(
    private callback:GamificationCallbacksService
  ){}

  close(){
    this.callback.close()
  }

}
