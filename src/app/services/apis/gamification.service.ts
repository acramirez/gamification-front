import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Gamification } from "../../shared/interfaces/response/gamification.interface";


@Injectable({
    providedIn: 'root'
})
export class GamificationService {

    private _getApiUri: string = environment.benefits;

    constructor(
        private httpClient: HttpClient,
    ) { }

    getGamifications(): Observable<Gamification> {


        return this.httpClient.get<Gamification>(`${this._getApiUri}`);
    }
}
