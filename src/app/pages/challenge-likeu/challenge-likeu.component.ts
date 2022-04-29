import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { Card } from 'src/app/shared/interfaces/response/icard-details';
import { Tab } from 'src/app/shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from 'src/app/services/facades/challenges.facade';
import { Challenge } from 'src/app/shared/interfaces/response/challengesContract.interface';
import { Period, PeriodDetail } from 'src/app/shared/interfaces/response/gamification.interface';
import { statusChallenges, statusMissions } from 'src/app/shared/interfaces/checkChallenges.interface';

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
  statusMissions:statusMissions[]=[]


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
        this.period=period;
        
        this.checkChallenges()
        this.getTabs(period);
        this.getChallenges(Number(period.current_period));
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
    this.specialChallenges=[];
    const mandatoryChallenges=this.challenges.missions[tab].mandatoryChallenges;
    const specialChallenges=this.challenges.missions[tab].specialChallenges;
    
    this.challenges.challenges.forEach(challenge=>{

      mandatoryChallenges.forEach(mandatory=>{
        if (mandatory===challenge.id) {
          challenge.status=this.setStatusChallenges(tab,challenge)
          this.mandatoryChallenges.push(challenge)
        }
      });

      specialChallenges.forEach(special=>{
        if (special===challenge.id) {

          challenge.status=this.setStatusChallenges(tab,challenge)

          this.specialChallenges.push(challenge)
        }
      });
    })

    console.log(this.mandatoryChallenges);
    
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
  }

  checkChallenges(){

    this.period.period_detail.forEach((period,i)=>{
      const statusChallenges:statusChallenges[]=[];

      const {
        accumulated_purchases,
        card_payment,recurrent_payment, 
        domiciliation,
        assistance,
        payroll_portability,
        digital_channels
      } = period

      if (accumulated_purchases && accumulated_purchases.amount>=200) {
        statusChallenges.push({id:'minimum_monthly_billing',status:true})
      }

      if(card_payment){
        for (let i = 0; i < card_payment.length; i++) {
          const card = card_payment[i];
          
          if(card.amount_payment.amount>card.minimum_amount.amount){
            statusChallenges.push({id:'card_payment',status:true})
            break
          }
        }
      }

      if (recurrent_payment) {
        for (let i = 0; i < recurrent_payment.length; i++) {
          const recurrent = recurrent_payment[i];
          if (recurrent.status==='ACTIVE') {
            statusChallenges.push({id:'recurrent_payment',status:true});
            break;
          }
        }
      }

      if (domiciliation) {
        for (let i = 0; i < domiciliation.length; i++) {
          const dom = domiciliation[i];
          if (dom.status==='ACTIVE') {
            statusChallenges.push({id:'domicialitation',status:true})
            break
          }
        }
      }

      if (assistance) {
        for (let i = 0; i < assistance.length; i++) {
          const assis = assistance[i];
          if (assis.status==='ACTIVE') {
            statusChallenges.push({id:'assistance',status:true})
            break
          }
        }
      }
      
      if (payroll_portability) {
        for (let i = 0; i < payroll_portability.length; i++) {
          const payroll = payroll_portability[i];
          if (payroll.status==='ACTIVE') {
            statusChallenges.push({id:'assistance',status:true})
            break
          }
        }
      }
      if (digital_channels) {
        for (let i = 0; i < digital_channels.length; i++) {
          const channel = digital_channels[i];
          if (channel.status==='ACTIVE') {
            statusChallenges.push({id:'assistance',status:true})
            break
          }
        }
      }

      this.statusMissions.push({mission:period.period_id,challenges:statusChallenges})

    })

  }

  setStatusChallenges(tab:number,challenge:Challenge){
    console.log(this.statusMissions);
    console.log(this.mandatoryChallenges);
    let status=false
    this.statusMissions.forEach(mission=>{
      if (mission.mission===tab.toString()) {
        
        mission.challenges?.forEach(chall=>{
          if (chall.id===challenge.id) {
            status=chall.status
            console.log(chall);
          }
        })

      }
    })
      
    return status
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }



}
