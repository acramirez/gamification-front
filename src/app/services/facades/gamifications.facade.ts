import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ChallengeLikeU } from "../../shared/interfaces/response/challenges.interface";

import { GamificationService } from "../apis/gamification.service";
import { ErrorService } from "../apis/error.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class GamificationFacade {

    public firstaccess:boolean=false
    public message:boolean=false
    public route:string='';


    constructor( 
        private gamificacionAPI: GamificationService,
        private errorService:ErrorService,
        private router:Router
        ) {        
    }

    getGamification():Observable<ChallengeLikeU>{
        return this.gamificacionAPI.getGamifications().pipe(
            tap(resp=>{ 
                console.log(resp);
                if(resp.card.status!=="ACTIVE"){
                    const error = throwError('Tarjeta bloqueada')
                    this.errorService.errorShow(error)
                }                
            }),
            map(resp=>{
                
                const{cut_of_date,seen_first_time}=resp
                const{current_limit,potential_limit,period,status,lower_limit}=resp.card
                return {
                    current_limit,
                    potential_limit,
                    period,
                    cut_of_date,
                    status,
                    seen_first_time,
                    lower_limit
                }
            }),
            tap(resp=>{

                if (resp.seen_first_time ) {
                    this.router.navigateByUrl('bienvenido')
                    this.firstaccess=true
                }
            })
        )
    }
}

