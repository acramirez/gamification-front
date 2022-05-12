import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { OpaqueToken } from "src/app/shared/interfaces/response/opaqueToken.interfaace";

import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    private _apiUrl: string = `${environment.tkn.url}`;

    private _token: string = '';

    constructor( 
        private httpClient: HttpClient,
    ) { }

    getValidateToken(tkn:string): Observable<OpaqueToken> {
        
        const url = `${this._apiUrl}/${tkn}`;
        return this.httpClient.get<OpaqueToken>( url, {params: this.httpParams} );

    }


    
    get httpParams(): HttpParams {
        const jsonEntry = {
            stokenValidatorRequest: {
                token: this._token,
                ipUsuario: '180.186.107.23',
                idAplicativo: 'SNET',
                PAdicional: ''
            }
        }
        return new HttpParams({
            fromObject:{
              jsonEntrada:JSON.stringify( jsonEntry )
            }
        });
    }
}