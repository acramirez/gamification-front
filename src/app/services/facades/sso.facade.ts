
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { throwError } from "rxjs";
import { ErrorService } from "../apis/error.service";

import { TokenValidatorService } from "../apis/token.validator.service";

@Injectable({
    providedIn: 'root'
})
export class TokenSsoFacade {

    public _token!:string
    challengesRedirect:string[]=[]

    constructor(
        private tokenService:TokenValidatorService,
        private activatedRoute:ActivatedRoute,
        private errorService:ErrorService,
    ) {
       
    }

    validationToken( ) {
        let tkn=''
        let isBase64=false
        let error

        this.activatedRoute.queryParams.subscribe(params=>{
            if (params['token']) {
                tkn=this.transformBase64(params['token'])
                this._token=tkn
                isBase64=this.isBase64Token(tkn)
            }else{
                console.log(params['token']);
                error= throwError('El token no existe')
            }
        })
        
        if (!isBase64) {
            error = throwError('El token no es base 64')
        }
        
        if (error) {
            this.errorService.errorShow(error)
            return error
        }
        
        return this.tokenService.getValidateToken(tkn);
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