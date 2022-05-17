import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ChallengeLikeU } from "src/app/shared/interfaces/response/challenges.interface";
import { environment } from "src/environments/environment";

import { GamificationService } from "../apis/gamification.service";

@Injectable({
    providedIn: 'root'
})
export class GamificationFacade {

    private _authorization=environment.gamification.dummy

    constructor( private gamificacionAPI: GamificationService ) {        
    }

    getGamification():Observable<ChallengeLikeU>{
        return this.gamificacionAPI.getGamifications(this._authorization).pipe(
            map(resp=>{
                const{cut_of_date}=resp.data
                const{current_limit,potential_limit,period}=resp.data.card
                return {
                    current_limit,
                    potential_limit,
                    period,
                    cut_of_date
                }
            })
        )
    }

}