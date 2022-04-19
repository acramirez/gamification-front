import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Gamifications } from "../interfaces/gamification.interfaces";

@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = "https://gamification-service-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/credits/v2/credits/623a6e307ac5946aa98d388e/benefits";

    //private _getApiUri: string = 'http://127.0.0.1:8000/gamifications';

    constructor( private httpClient: HttpClient ) { }

    getGamifications(): Observable<Gamifications> {
        const headers = new HttpHeaders({
            'Authorization': 
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDAzMCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.cNYqS5LbPAGc6lUUwTYvXvfhqMuoctsG72rkW5SZ8KM'
        });

        return this.httpClient.get<Gamifications>(`${this._getApiUri}`, {headers});
    }
}