import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorService } from '../error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private errorService:ErrorService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((error)=>{
        return this.manejarError(error)
      })
    )
  }


  manejarError(error:HttpErrorResponse){
    let errorMessage = '';

        if (error.error instanceof ErrorEvent)  {
          errorMessage = `Error client: ${error.error.message}`;
        }else {
          this.errorService.showError=true;
          errorMessage = `Error server: ${error.status}, message: ${error.message}`;
        }
        
        return throwError (errorMessage)
  }
}
