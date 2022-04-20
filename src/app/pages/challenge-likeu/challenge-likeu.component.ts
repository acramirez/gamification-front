import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card.model';
import { PeriodDetail } from 'src/app/shared/models/period-detail.model';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';

@Component({
  selector: 'challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnInit,OnDestroy {

  public cardDetail!:Card;
  public periodDetail!:PeriodDetail[];

  private destroy$!:Subject<any>;

  constructor(private gamificacionFacade: GamificationFacade) { }


  ngOnInit(): void {

    const destroy$=new Subject;

    this.gamificacionFacade
      .getCard()
        .pipe(takeUntil(destroy$))
        .subscribe(resp => {
      this.cardDetail=resp
      console.log(this.cardDetail);
      
    });

    this.gamificacionFacade
      .getPeriodDetails()
        .pipe(takeUntil(destroy$))
        .subscribe(resp => {
      this.periodDetail=resp;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }



}
