import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { OpaqueToken } from "../interfaces/token.interface";

@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    private _apiUrl: string = `${environment.tkn.url}`;

    private _token: string = '';

    constructor( private httpClient: HttpClient ) { }

    getValidateToken(token: string): Observable<OpaqueToken> {
        this._token = token;
        const url = `${this._apiUrl}/${environment.tkn.apiService.validator}`;
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