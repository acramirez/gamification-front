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

    constructor( 
        private httpClient: HttpClient,
        private configService:ConfigService
    ) { }

    getValidateToken(tkn:string): Observable<TokenValidator> {
    

        const headers = new HttpHeaders({
            "Authorization":tkn
          })
      
        console.log(headers);
        console.log(headers.get("Authorization"));
        
        const url = this.configService.tokenURL;
        
        return this.httpClient.post<TokenValidator>( url,null,{headers} );

    }

}