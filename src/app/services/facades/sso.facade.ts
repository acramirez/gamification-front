
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { TokenValidator } from "../../shared/interfaces/response/opaqueToken.interface";

import { ErrorService } from "../apis/error.service";
import { TokenValidatorService } from "../apis/token.validator.service";

@Injectable({
    providedIn: 'root'
})
export class TokenSsoFacade {

    public _token!:string
    private isBase64!:boolean

    constructor(
        private errorService:ErrorService,
        private tokenService:TokenValidatorService
    ) {
       
    }

    validationToken(tkn:string ): Observable<TokenValidator> {
        
        tkn=this.transformBase64(tkn)
        this.isBase64=this.isBase64Token(tkn)
        
        if (!this.isBase64) {

            this.errorService.showError=true
            return throwError('El token no es base 64')
        }
        
        this._token=tkn
        
        return this.tokenService.getValidateToken(tkn)
    }

    isBase64Token(tkn:string){

        let base64regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/

        const validateBase64=base64regex.test(tkn);

        if (!validateBase64) {
          return false
        }
        return true
      }

      transformBase64(tkn:string){

        const token=tkn.split(' ')

        tkn='';
        token.forEach((t,i)=>{

            if (i<token.length-1) {
                tkn+=`${t}+`
            }else{
                tkn+=`${t}`
            }
        })
        
        return tkn

      }
}