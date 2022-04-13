import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TokenRequest } from "../../models/token.model";

import { TokenOauthService } from "../apis/token-oauth.service";
import { TokenOauthResponse } from "../interfaces/token.interface";

@Injectable({
    providedIn: 'root'
})
export class TokenOauthFacade {

    constructor( private tokenOauthService: TokenOauthService ) {}

    tokenRequest: TokenRequest = {
        client_id: 'ciwW9vJh5hr8cIP4yaLs3O8z8tudGk-9YfSONX2XNxM',
        client_secret: 'UZ3kYdWSmVIayxzVesiHWk1GiEEMjht46Xw-21Qzp6A',
        grant_type: 'client_credentials',
        scope: 'odm_estados_cuenta customer-profile-oa2p_1.2.0'
    }

    getAuthorizationToken(): Observable<TokenOauthResponse> {
        return this.tokenOauthService.getTokenOauth(this.tokenRequest);
    }

    private isAValidToken(timeExpires: number): boolean {
        
        return true;
    }

}    