import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TokenValidator } from "../../shared/interfaces/response/opaqueToken.interface";

@Injectable({
    providedIn: 'root'
})
export class TokenValidatorService {

    constructor( 
        private httpClient: HttpClient,
    ) { }

    getValidateToken(tkn:string): Observable<TokenValidator> {
    

        const headers = new HttpHeaders({
            "Authorization":tkn
        })
        
        const url = environment.session;
        
        return this.httpClient.post<TokenValidator>( url,null,{headers} );

    }

}