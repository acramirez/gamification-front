import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GamificationService } from "../apis/gamification.service";
import { Gamifications } from "../interfaces/gamification.interfaces";

@Injectable({
    providedIn: 'root'
})
export class GamificationFacade {

    response: Observable<Gamifications>;

    constructor( private gamificacionAPI: GamificationService ) {
        this.response = this.gamificacionAPI.getGamifications();
    }

}