import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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

        const headers:HttpHeaders = new HttpHeaders({
            'Authorization':tkn
        })

        console.log(headers);
        console.log(tkn);
        
        
        const url = `${this._apiUrl}`;
        console.log(url);
        
        return this.httpClient.get<OpaqueToken>( url, {headers} );

    }
}