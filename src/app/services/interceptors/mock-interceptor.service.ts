import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../apis/config.service';
import { TokenValidatorService } from '../apis/token.validator.service';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptorService implements HttpInterceptor {

  constructor(
    private configService:ConfigService,
    private tknService:TokenValidatorService
  ){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    


    // if (req.url===environment.tkn.url && !environment.production) {      
    //   return of(new HttpResponse({status:200, body:(mockToken)}))
    // }
    
    
    // if (req.url===environment.gamification.url && !environment.production) {
    //   return of(new HttpResponse({status:200, body:(gamification)}))
    // }
    return next.handle(req)
    
  }
}
