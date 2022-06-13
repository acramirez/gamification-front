import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';

@Injectable({
  providedIn: 'root'
})
export class MessageGuard implements CanActivate, CanLoad {

  constructor(
    private gamificationFacade:GamificationFacade
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.gamificationFacade.message) {
        return true;
        
      }
      return false
    
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.gamificationFacade.message) {
        return true;
        
      }
      return false 
  }
}
