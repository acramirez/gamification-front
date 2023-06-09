import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ChallengeLikeU } from '../../shared/interfaces/response/challenges.interface';

import { GamificationService } from '../apis/gamification.service';
import { ErrorService } from '../apis/error.service';

@Injectable({
  providedIn: 'root',
})
export class GamificationFacade {
  /**
   *Property to save response Gamification
   */
  public resp!: ChallengeLikeU;

  constructor(
    private gamificacionAPI: GamificationService,
    private errorService: ErrorService
  ) {}

  /**
   * Function that extracts the necessary data for challengelikeu.component
   * @returns Observable ChallengeLikeU
   */
  getGamification(): Observable<ChallengeLikeU> {
    return this.gamificacionAPI.getGamifications().pipe(
      tap((resp) => {
        if (resp.card.status !== 'ACTIVE') {
          const error = throwError(() => 'Tarjeta bloqueada');
          this.errorService.errorShow(error, '2');
        }
      }),
      map((resp) => {
        const { cut_of_date, seen_first_time } = resp;
        const { current_limit, potential_limit, period, status, lower_limit } =
          resp.card;
        return {
          current_limit,
          potential_limit,
          period,
          cut_of_date,
          status,
          seen_first_time,
          lower_limit,
          statusChallenge: resp.status,
        };
      })
    );
  }
}
