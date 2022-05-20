import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenValidator } from "src/app/shared/interfaces/response/opaqueToken.interface";

import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    private _apiUrl: string = environment.tkn.url;

    constructor( 
        private httpClient: HttpClient,
    ) { }

    getValidateToken(tkn:string): Observable<TokenValidator> {
        
        const headers = new HttpHeaders({
            'Authorization': 
            tkn
        });
        
        const url = `${this._apiUrl}`;
        
        return this.httpClient.post<TokenValidator>( url, {headers} );

    }

}