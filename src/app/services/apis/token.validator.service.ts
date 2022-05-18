import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OpaqueToken } from "src/app/shared/interfaces/response/opaqueToken.interfaace";

import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    private _apiUrl: string = environment.tkn.url;

    constructor( 
        private httpClient: HttpClient,
    ) { }

    getValidateToken(tkn:string): Observable<OpaqueToken> {
        console.log(tkn);
        
        const headers = new HttpHeaders({
            'Authorization': 
            tkn
        });
        console.log(headers);
        
        const url = `${this._apiUrl}`;
        
        return this.httpClient.post<OpaqueToken>( url, {headers} );

    }

}