import { Injectable } from '@angular/core';



declare let Gamification:any;

@Injectable({
  providedIn: 'root'
})
export class GamificationCallbacksService {

  refreshSession(){
	  console.log('refresh');
	  
    if (typeof Gamification !== 'undefined') {
      Gamification.refreshSession();
    }else if((window as any).webkit !== undefined && (window as any).webkit.messageHandlers.Gamification !== undefined){
      (window as any).webkit.messageHandlers.Gamification.refreshSession()
    }
  }


  close() {
		console.log('close');
		
		if (typeof Gamification !== 'undefined') {
			
			Gamification.close();
			
		} else if ((window as any).webkit !== undefined && (window as any).webkit.messageHandlers.Gamification !== undefined) {
			
		  (window as any).webkit.messageHandlers.Gamification.close();
			
		}		
	}

	redirect(challengeId:string) {

		console.log('redirect');

		if (typeof Gamification !== 'undefined') {

		Gamification.redirect(challengeId);

		} else if ((window as any).webkit !== undefined && (window as any).webkit.messageHandlers.Gamification !== undefined) {

		(window as any).webkit.messageHandlers.Gamification.redirect(challengeId);

		}		
	}	
}
