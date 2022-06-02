import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gamification } from "../../shared/interfaces/response/gamification.interface";
import { environment } from "../../../environments/environment";
import { ConfigService } from "./config.service";


@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = this.configService.gamificationURL;

    constructor( 
        private httpClient: HttpClient,
        private configService:ConfigService
    ) { }

    getGamifications(): Observable<Gamification> {

        
        return this.httpClient.get<Gamification>(`${this._getApiUri}`);
    }
}