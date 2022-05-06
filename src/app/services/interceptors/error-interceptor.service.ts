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
    private route:Router
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

        switch (error.status) {
          case 404:
          this.errorService.showError=true;
            this.errorService.error={
              title:'Error del cliente',
              message:'',
            }
            break;
        
          default:
            break;
        }
        this.route.navigate(['error'])
        return throwError (errorMessage)
  }
}
