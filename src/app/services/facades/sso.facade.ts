
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { TokenValidatorService } from "../apis/token.validator.service";


@Injectable({
    providedIn: 'root'
})
export class TokenSsoFacade {

    constructor(
        private tokenService: TokenValidatorService
    ) {}

    validToken!:boolean;

    private _token: string = `${environment.tkn.dummy}`;

    validationToken(): Observable<boolean> {
        return this.tokenService.getValidateToken(this._token).pipe(
            map( resp => {
                return ( resp.stokenValidatorResponse.codigoMensaje==='TVT_000')?this.validToken=true : this.validToken=false
            })
        );
    }
}