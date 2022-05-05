import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { Card } from 'src/app/shared/interfaces/response/icard-details';
import { Tab } from 'src/app/shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from 'src/app/services/facades/challenges.facade';
import { Challenge } from 'src/app/shared/interfaces/response/challengesContract.interface';
import { Period } from 'src/app/shared/interfaces/response/gamification.interface';
import { statusChallenges, statusMissions } from 'src/app/shared/interfaces/checkChallenges.interface';
import { challengesFather } from 'src/app/shared/data/constant/data.constant';
import { TokenSsoFacade } from 'src/app/services/facades/sso.facade';

@Component({
  selector: 'challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnDestroy,AfterViewInit, OnInit {

  public cardDetail!:Card;
  public period!:Period;
  mandatoryChallenges:Challenge[]=[]
  specialChallenges:Challenge[]=[]
  challengeActive!:Challenge;
  statusMissions:statusMissions[]=[]
  percent:number=0;
  currentPeriod:number=0
  cut_of_day!:Date
  index!:Number



  // Temporaly


  tabs:Tab[]=[];
  showModal:boolean=false;


  private destroy$!:Subject<any>;

  constructor(
    private gamificacionFacade: GamificationFacade,
    private tokenFacade: TokenSsoFacade,
    private challengesFacade: ChallengesFacade,
  ) { }

  ngOnInit(): void {

    this.tokenFacade.validationToken().subscribe(console.log)

  }

  ngAfterViewInit(): void {
    this.destroy$=new Subject;

    
    this.gamificacionFacade.getGamification()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(resp=>{
        
        let{cut_of_day}=resp
        const{current_limit,potential_limit,period}=resp
        this.cardDetail={current_limit,potential_limit}
        this.period=period;
        this.currentPeriod=Number(period.current_period)
        this.index=this.currentPeriod
        

        this.checkChallenges()
        this.getTabs(period);
        this.getChallenges(this.currentPeriod);
        this.cut_of_day=new Date('2022-05-12')
        this.getDays(this.cut_of_day)

        
      })

  }

  get challenges(){
    return this.challengesFacade.getChallenges();
  }

  get FAQs(){
    return this.challenges.FAQ
  }

  get challengesFather(){
    return challengesFather
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

    this.challengesRedirect();
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

    let status=false
    this.statusMissions.forEach(mission=>{
      if (mission.mission===tab.toString()) {
        
        mission.challenges?.forEach(chall=>{
          if (chall.id===challenge.id) {
            status=chall.status
          }
        })

      }
    })
      
    return status
  }

  getPercent(){
    let missionsComplete:number=0;

    this.mandatoryChallenges.forEach(mandatory=>{
      if (mandatory.status===true) {
        missionsComplete++
      }
    })

    if (this.specialChallenges.length>0) {
      
      for (let i = 0; i < this.specialChallenges.length; i++) {
        const special = this.specialChallenges[i];
  
        if (special.status===true) {
          missionsComplete++
          break;
        }
      }
    }    
    
    const percent= (missionsComplete * 100)/Number(this.challenges.challengeCount)
    
    return percent
  }

  challengesRedirect(){
    this.challengesFather.challenges.forEach(challenge=>{
      this.mandatoryChallenges.forEach(mandatory=>{
        if(mandatory.id===challenge){
          mandatory.redirection=true
        }
      })

      if (this.specialChallenges.length>0) {
        this.specialChallenges.forEach(special=>{
          if (special.id===challenge) {
            special.redirection=true;
          }
        })
      }
    })
  }

  getDays(date:Date){

    if (this.currentPeriod===this.index) {
      const currenDate=new Date().getTime()
      const cutDate=date.getTime();
  
      const result= cutDate-currenDate
  
      const days=Math.round(result/(1000 * 60 * 60 * 24))
      
      return days
      
    }
    return null
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }



}
