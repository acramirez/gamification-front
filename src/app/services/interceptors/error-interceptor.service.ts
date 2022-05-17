import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorService } from '../apis/error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private errorService:ErrorService,
    private router:Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((error)=>{
        return this.manejarError(error)
      })
    )
  }


  manejarError(error:Observable<never>){

    if (error) {
      this.router.navigate(['error'])
    }
    return throwError (error)
  }
}
