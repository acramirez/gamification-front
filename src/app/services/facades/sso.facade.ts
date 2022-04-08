
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { SsoService } from "../sso.service";


@Injectable({
    providedIn: 'root'
})
export class SsoFacade{

    constructor(private ssoService:SsoService){

    }

    validToken!:boolean;

    validationToken(){
        return this.ssoService.getValidationToken('dsdsesd').pipe(
            map(res=>{
                return (res.stokenValidatorResponse.codigoMensaje==='TVT_000')?this.validToken=true : this.validToken=false
            })
        )
    }
}