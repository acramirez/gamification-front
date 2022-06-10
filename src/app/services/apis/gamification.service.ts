import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gamification } from "../../shared/interfaces/response/gamification.interface";
import { ConfigFacade } from "../facades/config.facade";


@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = this.configFacade.gamificationURL;

    constructor( 
        private httpClient: HttpClient,
        private configFacade:ConfigFacade
    ) { }

    getGamifications(): Observable<Gamification> {

        
        return this.httpClient.get<Gamification>(`${this._getApiUri}`);
    }
}