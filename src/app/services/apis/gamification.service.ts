import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Gamifications } from "../interfaces/gamification.interfaces";

@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = "http://127.0.0.1:8000/gamifications";

    constructor( private httpClient: HttpClient ) { }

    getGamifications(): Observable<Gamifications> {
        return this.httpClient.get<Gamifications>(`${this._getApiUri}`);
    }
}