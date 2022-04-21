import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gamification } from "src/app/shared/interfaces/response/gamification.interface";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = environment.gamification.url;

    //private _getApiUri: string = 'http://127.0.0.1:8000/gamifications';

    constructor( private httpClient: HttpClient ) { }

    getGamifications(authorization:string): Observable<Gamification> {
        const headers = new HttpHeaders({
            'Authorization': 
            authorization
        });

        return this.httpClient.get<Gamification>(`${this._getApiUri}`, {headers});
    }
}