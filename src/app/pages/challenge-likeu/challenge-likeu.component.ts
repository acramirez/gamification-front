import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { PeriodDetail } from 'src/app/models/period-detail.model';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';

@Component({
  selector: 'app-challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnInit {

  public cardDetail!:Card;
  public periodDetail!:PeriodDetail[];

  constructor(private gamificacionFacade: GamificationFacade) { }

  ngOnInit(): void {
    this.gamificacionFacade
      .getCard().subscribe(resp => {
      this.cardDetail=resp
    });

    this.gamificacionFacade
      .getPeriodDetails().subscribe(resp => {
      this.periodDetail=resp;
    });
  }

}
