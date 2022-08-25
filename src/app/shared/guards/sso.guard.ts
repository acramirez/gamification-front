import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GamificationFacade } from '../../services/facades/gamifications.facade';

@Injectable({
  providedIn: 'root'
})
export class SsoGuard implements CanActivate {

  constructor(
    private gamificationFacade:GamificationFacade
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.gamificationFacade.resp) {
        return false
      }
      return true
  }
}
