import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { Card } from 'src/app/shared/interfaces/response/icard-details';
import { Tab } from 'src/app/shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from 'src/app/services/facades/challenges.facade';
import { Challenge } from 'src/app/shared/interfaces/response/challengesContract.interface';
import { Period } from 'src/app/shared/interfaces/response/gamification.interface';

@Component({
  selector: 'challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnDestroy,AfterViewInit {

  public cardDetail!:Card;
  mandatoryChallenges:Challenge[]=[]
  optionalChallenges:Challenge[]=[]
  activeTab:number=0;
  challengeActive!:Challenge;


  tabs:Tab[]=[];
  showModal:boolean=false;


  private destroy$!:Subject<any>;

  constructor(
    private gamificacionFacade: GamificationFacade,
    private challengesFacade: ChallengesFacade
  ) { }

  ngAfterViewInit(): void {

    this.destroy$=new Subject;
    this.gamificacionFacade.getGamification()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(resp=>{
        
        const{current_limit,potential_limit,period}=resp
        this.cardDetail={current_limit,potential_limit}

        this.getTabs(period);
        this.getChallenges(Number(period.current_period))
      })  
  }

  get challenges(){
    return this.challengesFacade.getChallenges();
  }

  get FAQs(){
    return this.challenges.FAQ
  }


  getChallenges(tab:number){

    this.mandatoryChallenges=[];
    this.optionalChallenges=[];
    const mandatoryChallenges=this.challenges.missions[tab].mandatoryChallenges;
    const optionalChallenges=this.challenges.missions[tab].optionalChallenges;
    
    this.challenges.challenges.forEach(challenge=>{

      mandatoryChallenges.forEach(mandatory=>{
        if (mandatory===challenge.id) {
          this.mandatoryChallenges.push(challenge)
        }
      })

      optionalChallenges.forEach(optional=>{
        if (optional===challenge.id) {
          this.optionalChallenges.push(challenge)
        }
      })
    })
    
  }

  getTabs(period:Period){

    period.period_detail.forEach((period)=>{

      const tab:Tab=
      {
        texto:`Misión ${period.period_id}`,
        status:period.status
      }

      this.tabs.push(tab)
    
    });


    this.challenges.missions.forEach((mission,i)=>{
      if (i>this.tabs.length) {
        const tab:Tab=
        {
          texto:`Misión ${mission.id}`,
          status:''
        }
  
        this.tabs.push(tab)
      }
    })



  }


  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }



}
