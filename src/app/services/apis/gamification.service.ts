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

    constructor( private httpClient: HttpClient ) { }

    getGamifications(authorization:string): Observable<Gamification> {
        const headers = new HttpHeaders({
            'Authorization': 
            authorization
        });
        
        return this.httpClient.get<Gamification>(`${this._getApiUri}`, {headers});
    }
}