
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { map, tap } from "rxjs/operators";
import { TokenValidator } from "../../shared/interfaces/response/opaqueToken.interface";
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
                tkn= params['token'];
                tkn=this.transformBase64(tkn)
                isBase64=this.isBase64Token(tkn)
            }else{
                error= throwError('El token no existe')
                this.errorService.errorShow(error)
            }
        })
        
        if (isBase64) {
            error = throwError('El token no es base 64')
        }

        if (error) {
            return error
        }
        
        return this.tokenService.getValidateToken(tkn)
            .toPromise()
                .then(challenges=>{
                    this.getRedirectChallenges(challenges)
                
                }).catch(err=>{
                    this.errorService.errorShow(err)
                })
    }

    getRedirectChallenges(challenges:TokenValidator){

        const cutChallenges=challenges.SecObjRec.SecObjInfoBean.SecObjData[0].SecObjDataValue.split('"challenges": [')
        const cutChallenges2=cutChallenges[1].split(']')
        this.challengesRedirect=cutChallenges2[0].split(',')
        this.challengesRedirect.forEach((challenge,i)=>{
        this.challengesRedirect[i]=challenge.trim().slice(1,-1)
        })
        console.log(this.challengesRedirect);
        
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