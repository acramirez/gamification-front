import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private activeRoute:ActivatedRoute) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const params =this.activeRoute.queryParams


    params.subscribe()

    return next.handle(req).pipe(
      tap(()=>{
        if (req.params.get('jsonEntrada')) {
          
        }
      })
      
    )
  }
}
