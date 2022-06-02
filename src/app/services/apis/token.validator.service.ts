import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenValidator } from "../../shared/interfaces/response/opaqueToken.interface";

import { environment } from "../../../environments/environment";
import { ConfigService } from "./config.service";


@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    private _apiUrl: string = this.configService.tokenURL;

    constructor( 
        private httpClient: HttpClient,
        private configService:ConfigService
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