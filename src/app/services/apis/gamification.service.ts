import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { GamificationDetailResponse } from "../interfaces/gamification.interfaces";

@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = "/v1/gamifications/{Gamification-key}";

    constructor( private httpClient: HttpClient ) { }

    getGamifications(): Observable<GamificationDetailResponse> {
        return this.httpClient.get<GamificationDetailResponse>(`http:127.0.0.1:8083${this._getApiUri}`);
    }

}