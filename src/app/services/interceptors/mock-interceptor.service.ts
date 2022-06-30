import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TokenValidatorService } from '../apis/token.validator.service';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptorService implements HttpInterceptor {

  constructor(
    private tknService:TokenValidatorService
  ){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req)
    
  }
}
