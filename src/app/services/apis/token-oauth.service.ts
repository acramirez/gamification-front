import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { TokenRequest } from "../../shared/models/token.model";
import { TokenOauthResponse } from "../interfaces/token.interface";

@Injectable({
    providedIn: 'root'
})
export class TokenOauthService {

    private _apiUrl: string = 'https://oauthservermx.in.caas.dev.mx.corp/grants/oauth2/v1/token';

    private _errorMessage: string = '';

    constructor( private httpClient: HttpClient ) {}

    getTokenOauth(tokenRequest: TokenRequest): Observable<TokenOauthResponse> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.httpClient.post<TokenOauthResponse>(
            `${this._apiUrl}`, tokenRequest, {headers})
            .pipe(
                catchError( error => {
                    console.log('error caught in service jwt..');
                    console.log(error);
                    return throwError(error);
                
                })  
            );
    }

}