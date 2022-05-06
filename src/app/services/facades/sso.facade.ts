
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

import { TokenValidatorService } from "../apis/token.validator.service";
import { ErrorService } from "../apis/error.service";

@Injectable({
    providedIn: 'root'
})
export class TokenSsoFacade {

    private _token!:string
    private isBase64!:boolean
    validToken!:boolean;

    constructor(
        private tokenService: TokenValidatorService,
        private activatedRoute:ActivatedRoute,
        private errorService:ErrorService,
        private router:Router
    ) {

        if (this.activatedRoute.queryParams) {
            const queryParams=this.activatedRoute.queryParams

            queryParams.subscribe(param=>{
              if (param['token']) {
                this._token=param['token']
                this.isBase64=this.isBase64Token()
              }else{
                  
                  throwError('param Token no existe')
                  console.log(this.errorService.showError);
              }
            })
          }
    }

    validationToken(): Observable<any> {
        if (this.isBase64) {
            return of(true)
            // return this.tokenService.getValidateToken(this._token)

        }else{
            this.errorService.showError=true
            this.router.navigate(['error'])
            return throwError('El token no es base 64')
        }
    }

    isBase64Token(){

        let base64regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/


        const tk=this._token.split(' ')

        this._token='';
        tk.forEach((tkn,i)=>{

            if (i<tk.length-1) {
                this._token+=`${tkn}+`
            }else{
                this._token+=`${tkn}`
            }
        })

        const validateBase64=base64regex.test(this._token);
        console.log(validateBase64);
        console.log(this._token);

        if (!validateBase64) {
          return false
        }
        return true
      }
}