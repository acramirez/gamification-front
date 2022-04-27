import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PeriodDetail } from 'src/app/shared/models/period-detail.model';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { Card } from 'src/app/shared/interfaces/response/icard-details';
import { Period } from 'src/app/shared/interfaces/response/gamification.interface';
import { Tab } from 'src/app/shared/interfaces/atoms/tab.interface';

@Component({
  selector: 'challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnDestroy,AfterViewInit {

  public cardDetail!:Card;
  public periods!:Period;
  tabs:Tab[]=[];
  showModal:boolean=false;

  private destroy$!:Subject<any>;

  constructor(private gamificacionFacade: GamificationFacade) { }

  ngAfterViewInit(): void {

    this.destroy$=new Subject;
    this.gamificacionFacade.getGamification()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(resp=>{
        
        const{current_limit,potential_limit,period}=resp
        
        this.cardDetail={current_limit,potential_limit}
        this.periods=period

        
        this.getTabs(period.period_detail)
      })  
  }

  openModal(){
    this.showModal=true
  }

  getTabs(periods:PeriodDetail[]){
    periods.forEach((period)=>{

      const tab:Tab=
      {
        texto:`Misión ${period.period_id}`,
        status:period.status
      }

      this.tabs.push(tab)
      console.log();
      
    })
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }



}
