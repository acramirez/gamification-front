import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenValidator } from "../../shared/interfaces/response/opaqueToken.interface";

import { ConfigFacade } from "../facades/config.facade";


@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    constructor( 
        private httpClient: HttpClient,
        private configFacade:ConfigFacade
    ) { }

    getValidateToken(tkn:string): Observable<TokenValidator> {
    

        const headers = new HttpHeaders({
            "Authorization":tkn
        })
        
        const url = this.configFacade.tokenURL;
        
        return this.httpClient.post<TokenValidator>( url,null,{headers} );

    }

}