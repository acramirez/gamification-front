import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gamification } from "../../shared/interfaces/response/gamification.interface";
import { environment } from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = environment.gamification.url;

    constructor( private httpClient: HttpClient ) { }

    getGamifications(): Observable<Gamification> {

        
        return this.httpClient.get<Gamification>(`${this._getApiUri}`);
    }
}