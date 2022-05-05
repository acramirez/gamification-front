
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { OpaqueToken } from "src/app/shared/interfaces/response/opaqueToken.interfaace";

import { environment } from "src/environments/environment";
import { TokenValidatorService } from "../apis/token.validator.service";

@Injectable({
    providedIn: 'root'
})
export class TokenSsoFacade {

    private _token!:string
    private isBase64!:boolean
    validToken!:boolean;

    constructor(
        private tokenService: TokenValidatorService,
        private activatedRoute:ActivatedRoute
    ) {

        if (this.activatedRoute.queryParams) {
            const queryParams=this.activatedRoute.queryParams
            
            queryParams.subscribe(param=>{
              if (param['token']) {
                this._token=param['token']
                this.isBase64=this.isBase64Token()     
              }              
            })
          }
    }

    validationToken(): Observable<OpaqueToken> {
        return this.tokenService.getValidateToken(this._token)
    }


    isBase64Token(){
    
        let base64regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/
    
        
        const tk=this._token.split(' ')
        console.log(tk);
           
        this._token='';
        tk.forEach((tkn,i)=>{
            
            if (i<tk.length-1) {
                this._token+=`${tkn}+`
                console.log(tk.length);
                console.log(i);
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