import { Component, Input } from '@angular/core';
import { GamificationCallbacksService } from '../../../services/gamification-callbacks.service';

@Component({
  selector: 'lu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  /**
   *Background Circle
   */
   @Input() circleBG = true;

   constructor(private callback: GamificationCallbacksService) {}

   /**
    * Callback close challenge likeu
    */
   close() {
     this.callback.close();
   }

   /**
    * Callback redirect challenge likeu
    */
   redirect() {
     this.callback.redirect('client_support');
   }

}
