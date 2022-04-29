import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { Card } from 'src/app/shared/interfaces/response/icard-details';
import { Tab } from 'src/app/shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from 'src/app/services/facades/challenges.facade';
import { Challenge } from 'src/app/shared/interfaces/response/challengesContract.interface';
import { Period, PeriodDetail } from 'src/app/shared/interfaces/response/gamification.interface';

@Component({
  selector: 'challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnDestroy,AfterViewInit {

  public cardDetail!:Card;
  public period!:Period;
  mandatoryChallenges:Challenge[]=[]
  specialChallenges:Challenge[]=[]
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
        this.getChallenges(Number(period.current_period));
        this.period=period;
      })  
  }

  get challenges(){
    return this.challengesFacade.getChallenges();
  }

  get FAQs(){
    return this.challenges.FAQ
  }


  getChallenges(tab:number){

    console.log(tab);
    
    this.mandatoryChallenges=[];
    this.specialChallenges=[];
    const mandatoryChallenges=this.challenges.missions[tab].mandatoryChallenges;
    const specialChallenges=this.challenges.missions[tab].specialChallenges;
    
    this.challenges.challenges.forEach(challenge=>{

      mandatoryChallenges.forEach(mandatory=>{
        if (mandatory===challenge.id) {
          // challenge=this.checkChallenges(tab,challenge)
          this.mandatoryChallenges.push(challenge)
        }
      });

      specialChallenges.forEach(optional=>{
        if (optional===challenge.id) {
          // challenge=this.checkChallenges(tab,challenge)
          this.specialChallenges.push(challenge)
        }
      });

    })
  }

  getTabs(period:Period){

    this.challenges.missions.forEach((mission,i)=>{
      let tab:Tab={
        id:'',
        texto:'',
        status:''
      }
      if(mission.id==='0'){
        tab.texto='Intro',
        tab.id=mission.id
      }
      else{
        tab.texto=`Misión ${mission.id}`
        tab.id=mission.id
      }
      this.tabs.push(tab);
    })

    this.tabs.forEach((tab,i)=>{
      period.period_detail.forEach(mission=>{
        if (tab.id===mission.period_id) {
          tab.status=mission.status
        }
        
      })
    })

    console.log(this.tabs);
    
  }

  checkChallenges(tab:number, challenge:Challenge){
    const period = this.period.period_detail[tab]

      switch (challenge.id) {
        case 'accumulated_purchases':
          if(period['accumulated_purchases'] && period['accumulated_purchases'].amount>200){
            challenge={...challenge,status:true}
          }
          return  challenge  
        default:
          return challenge
      }
    
  }


  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }



}
