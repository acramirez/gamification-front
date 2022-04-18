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
        const url = 'http://localhost:8000/tokenValidator';
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
    
    /* generateToken() {
        const url = `${this._apiUrl}/${environment.tkn.apiService.generator}`;

        return this.httpClient.get<any>( url, { params: this.httpParams } );
    }

    get httpParams(): HttpParams {
        return new HttpParams()
            .set('jsonEntrada', '{"tokenGeneratorRequest":{"idusuario":"00000010","idAplicativo":"snet","sesionSN":"KnBGEzAcrfEmUOmyU0U9ijV","ipUsuario":"127.0.0.1","PAdicional":"eyJzZXNpb25TZWd1cmlkYWQiOiI3eW8zYjZrK2VVZTAxaWpxbmwvSk1sMHNPcUFcdTAwM2QiLCJpZEFwbGljYWNpb24iOiJTTkVUIiwiaWRlbnRpZmljYWRvciI6IlNORVQiLCJpZFVzdWFyaW8iOiIwMDAwMDAxMCIsInNlc2lvbkFwbGljYXRpdm8iOiJLbkJHRXpBY3JmRW1VT215VTBVOWlqViJ9"}}');
    } */

}