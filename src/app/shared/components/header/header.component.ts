import { Component, Input } from '@angular/core';
import { GamificationCallbacksService } from '../../../services/gamification-callbacks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Input()circleBG=true

  constructor(
    private callback:GamificationCallbacksService
  ){}

  close(){
    this.callback.close()
  }

  redirect(){
    this.callback.redirect('client_support')
  }

}
