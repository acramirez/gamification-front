import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockToken } from '../../../assets/data/constant/token.mock';
import { gamification } from "../../../assets/data/constant/gamification";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptorService implements HttpInterceptor {

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
