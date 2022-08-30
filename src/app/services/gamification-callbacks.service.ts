import { Injectable } from '@angular/core';

declare let Gamification: any;

@Injectable({
  providedIn: 'root',
})
export class GamificationCallbacksService {
  /**
   * Function to refresh session (callback)
   */
  refreshSession() {
    if (typeof Gamification !== 'undefined') {
      Gamification.refreshSession();
    } else if (
      (window as any).webkit !== undefined &&
      (window as any).webkit.messageHandlers.Gamification !== undefined
    ) {
      (window as any).webkit.messageHandlers.Gamification.refreshSession();
    }
  }

  /**
   * Function to close gamification app (callback)
   */
  close() {
    if (typeof Gamification !== 'undefined') {
      Gamification.close();
    } else if (
      (window as any).webkit !== undefined &&
      (window as any).webkit.messageHandlers.Gamification !== undefined
    ) {
      (window as any).webkit.messageHandlers.Gamification.close();
    }
  }

  /**
   * Function to redirect father (callback)
   * @param challengeId redirect challenge
   */
  redirect(challengeId: string) {
    if (typeof Gamification !== 'undefined') {
      Gamification.redirect(challengeId);
    } else if (
      (window as any).webkit !== undefined &&
      (window as any).webkit.messageHandlers.Gamification !== undefined
    ) {
      (window as any).webkit.messageHandlers.Gamification.redirect(challengeId);
    }
  }
}
