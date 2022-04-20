import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenSsoFacade } from 'src/app/services/facades/sso.facade';

@Injectable({
  providedIn: 'root'
})
export class SsoGuard implements CanActivate, CanLoad {

  constructor( private ssoFacade: TokenSsoFacade ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.ssoFacade.validToken);
      
    return this.ssoFacade.validToken

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.ssoFacade.validToken);

    return this.ssoFacade.validToken
  }
}
