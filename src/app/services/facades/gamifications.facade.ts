import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ChallengeLikeU } from "../../shared/interfaces/response/challenges.interface";
import { environment } from "../../../environments/environment";

import { GamificationService } from "../apis/gamification.service";
import { ErrorService } from "../apis/error.service";

@Injectable({
    providedIn: 'root'
})
export class GamificationFacade {

    private _authorization=environment.gamification.dummy
    public message:boolean=false


    constructor( 
        private gamificacionAPI: GamificationService,
        private errorService:ErrorService) {        
    }

    getGamification():Observable<ChallengeLikeU>{
        return this.gamificacionAPI.getGamifications(this._authorization).pipe(
            tap(resp=>{ 
                if(resp.data.card.status!=="ACTIVE"){
                    const error = throwError('Tarjeta bloqueada')
                    this.errorService.errorShow(error)
                }                
            }),
            map(resp=>{
                const{cut_of_date}=resp.data
                const{current_limit,potential_limit,period,status}=resp.data.card
                return {
                    current_limit,
                    potential_limit,
                    period,
                    cut_of_date,
                    status
                }
            })
        )
    }


}

