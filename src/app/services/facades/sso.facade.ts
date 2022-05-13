
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

import { TokenValidatorService } from "../apis/token.validator.service";
import { ErrorService } from "../apis/error.service";

@Injectable({
    providedIn: 'root'
})
export class TokenSsoFacade {

    public _token!:string
    private isBase64!:boolean

    constructor(
        private activatedRoute:ActivatedRoute,
        private errorService:ErrorService,
        private tokenService:TokenValidatorService
    ) {

       
    }

    validationToken(tkn:string): Observable<any> {

        
        tkn=this.transformBase64(tkn)    
        this.isBase64=this.isBase64Token(tkn);
        
        console.log(tkn);
        
        console.log(tkn);
        if (this.isBase64) {
            return of(true)
            return this.tokenService.getValidateToken(tkn)

        }else{
            this.errorService.showError=true
            return throwError('El token no es base 64')
        }
    }

    isBase64Token(tkn:string){

        let base64regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/

        tkn = this.transformBase64(tkn);
         
        const validateBase64=base64regex.test(tkn);

        if (!validateBase64) {
          return false
        }
        return true
      }

    transformBase64(tkn:string){
    const tk=tkn.split(' ')

    tkn='';
    tk.forEach((token,i)=>{

        if (i<tk.length-1) {
            tkn+=`${token}+`
        }else{
            tkn+=`${token}`
        }
    })        
    return tkn
    }
}