import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { ErrorService } from '../../services/apis/error.service';

@Injectable({
  providedIn: 'root'
})
export class SsoGuard implements CanActivate, CanLoad {

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
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.gamificationFacade.resp) {
        return false
      }
      return true
  }
}
