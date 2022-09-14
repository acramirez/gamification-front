import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../apis/error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private errorService:ErrorService,
  ) { }

  /**
   * Function to intercept all http request
   * @param req Request
   * @param next
   * @returns HttpEvent
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((error)=>{
        return this.manejarError(error)
      })
    )
  }

  /**
   * Function to handle htttp errors
   * @param error error http
   * @returns Observable<never>
   */
  manejarError(error:Observable<never>){

    if (error) {
      this.errorService.errorShow(error)
    }
    return throwError (()=>error)
  }
}
