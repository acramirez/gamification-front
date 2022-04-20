import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Card } from "../../shared/models/card.model";
import { PeriodDetail } from "../../shared/models/period-detail.model";
import { GamificationService } from "../apis/gamification.service";
import { Gamifications } from "../interfaces/gamification.interfaces";

@Injectable({
    providedIn: 'root'
})
export class GamificationFacade {

    private _responseGamifications: Observable<Gamifications>;

    constructor( private gamificacionAPI: GamificationService ) {
        this._responseGamifications = this.gamificacionAPI.getGamifications();
    }

    getCard(): Observable<Card> {
        return this._responseGamifications.pipe(
            map( card => {
                const {current_limit, next_increase,display_number,type,potential_limit} = card.data.card
                return new Card(current_limit,type,display_number,potential_limit,next_increase
                );
            })
        );
    }

    getPeriodDetails(): Observable<PeriodDetail[]> {
        return this._responseGamifications.pipe(
            map( resp => {
                return  resp.data.card.period.period_detail.map(period => {
                    return new PeriodDetail(
                        period.period_id, period.initial_date, period.due_date, period.status);
                })
            })
        );
    }

}