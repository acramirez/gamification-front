import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenOauthFacade } from "../facades/token-oauth.facade";

@Injectable()
export class JWTInterceptor {

    private _authToken: string = '';

    //constructor( private auth: TokenOauthFacade ) {}

    /*intercept(
        req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            console.log('intercept http request...');
            const response = this.auth.getAuthorizationToken();
            response.subscribe(resp => {
                this._authToken = resp.token_type + ' ' + resp.access_token;
            });
            const authRequest = req.clone({
                headers: req.headers.set('Authorization', this._authToken)
            });

        return next.handle( authRequest );
    }*/

}