import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { forkJoin, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GamificationFacade } from 'src/app/services/facades/gamifications.facade';
import { Card } from 'src/app/shared/interfaces/response/icard-details';
import { Tab } from 'src/app/shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from 'src/app/services/facades/challenges.facade';
import { Challenge } from 'src/app/shared/interfaces/response/challengesContract.interface';
import { CardPayment, CurrentLimit, Period, RecurrentPayment } from 'src/app/shared/interfaces/response/gamification.interface';
import { StatusChallenges, StatusMissions } from 'src/app/shared/interfaces/checkChallenges.interface';
import { challengesFather } from 'src/app/shared/data/constant/data.constant';
import { TokenSsoFacade } from 'src/app/services/facades/sso.facade';

import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/services/apis/error.service';
import { ChallengeLikeU } from 'src/app/shared/interfaces/response/challenges.interface';


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
  challengeActive!:Challenge;
  statusMissions:StatusMissions[]=[]
  percent:number=0;
  currentPeriod:number=0
  cutOfDay!:Date

  indexTab!:number
  remainingDays!:number | null
  resp!:ChallengeLikeU
  statusChallenges:StatusChallenges[]=[]


  // Temporaly


  tabs:Tab[]=[];
  showModal:boolean=false;


  private destroy$!:Subject<any>;

  constructor(
    private gamificacionFacade: GamificationFacade,
    private tokenFacade: TokenSsoFacade,
    private challengesFacade: ChallengesFacade,

    private activatedRoute:ActivatedRoute,
    private errorService:ErrorService,
    private router:Router,
  ) { }

  ngAfterViewInit(): void {
    this.destroy$=new Subject;

    if (!this.tokenFacade._token) {
      
      this.activatedRoute.queryParams.subscribe(params=>{
        if (params['token']) {
          const token= params['token'];

          return forkJoin(
            [this.tokenFacade.validationToken(token).pipe(
              catchError(err=>{
                this.errorService.errorShow(err)
                return throwError(err)
              })
              ),
              this.gamificacionFacade.getGamification()]
          ).subscribe(resp=>{
            this.proccessData(resp[1])
          })
          
        }else{
          
          const error= throwError('El token no existe')
          this.errorService.errorShow(error)
          return  error
        }
      })
    }else if (this.tokenFacade._token) {   
      this.gamificacionFacade.getGamification()
      .subscribe(resp=>{
        this.proccessData(resp)
      })
    }
  }


  proccessData(resp:ChallengeLikeU){
    let{cut_of_date}=resp
    const{current_limit,potential_limit,period}=resp
    this.cardDetail={current_limit,potential_limit}
    this.period=period;
    this.currentPeriod=Number(period.current_period)
    this.indexTab=this.currentPeriod
    this.getTabs(period);
    this.checkChallenges()
    this.getChallenges(this.currentPeriod);

    this.getPercent()
    if (cut_of_date) {
        this.cutOfDay=new Date(cut_of_date)
        this.remainingDays=this.getDays(this.cutOfDay)
    }

    
    
     if (this.remainingDays && this.remainingDays <0 && !sessionStorage.getItem('message')) {
       this.mandatoryChallenges.forEach(challenge=>{
         if (challenge.status===false) {
           sessionStorage.setItem('message','true')
           this.router.navigate(['notificacion','mision-no-cumplida'])
         }
       })  
     }
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

    const {mandatoryChallenges,acceleratorChallenges,specialChallenges} =this.challenges.missions[tab]
    
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

      acceleratorChallenges.forEach(accelerator=>{
        if (accelerator===challenge.id) {
          challenge.status=this.setStatusChallenges(tab,challenge)
          challenge.accelerator=true
          this.mandatoryChallenges.push(challenge)
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
        tab.texto='Intro'
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
      
      const {
        accumulated_purchases,
        card_payment,
        recurrent_payment, 
        domiciliation,
        assistance,
        payroll_portability,
        digitalChannels
      } = period      

      this.checkAccumulatedPurchases(accumulated_purchases);

      this.checkCardPayment(card_payment);

      this.checkRecurrentPayment(recurrent_payment);

      this.checkDomiciliation(domiciliation);

      this.checkAssistance(assistance);
      
      this.checkPayrollPortability(payroll_portability)

      this.checkDigitalChannels(digitalChannels)
      
      this.statusMissions.push({mission:period.period_id,challenges:this.statusChallenges})
      this.statusChallenges=[];
      
    })


  }

  checkAccumulatedPurchases(accumulatedPurchases:CurrentLimit){
    if (accumulatedPurchases && accumulatedPurchases.amount>=200) {
      this.statusChallenges.push({id:'minimum_monthly_billing',status:true})
    }
  }

  checkCardPayment(cardPayment:CardPayment[]){
    if(cardPayment){
      for (const card of cardPayment) {
        
        if(card.amount_payment.amount>card.minimum_amount.amount){
          this.statusChallenges.push({id:'card_payment',status:true})
          break
        }
      }
    }
  }

  checkRecurrentPayment(recurrentPayment:RecurrentPayment[]){
    if (recurrentPayment) {
      for (const recurrent of recurrentPayment) {
        if (recurrent.status==='ACTIVE') {
          this.statusChallenges.push({id:'recurrent_payment',status:true});
          break;
        }
      }
    }
  }

  checkDomiciliation(domiciliation:any[]){
    if (domiciliation) {
      for (const dom of domiciliation) {
        if (dom.status==='ACTIVE') {
          this.statusChallenges.push({id:'domicialitation',status:true})
          break
        }
      }
    }
  }

  checkAssistance(assistance:any[]){
    if (assistance) {
      for (const assis of assistance) {
        if (assis.status==='ACTIVE') {
          this.statusChallenges.push({id:'assistance',status:true})
          break
        }
      }
    }
  }

  checkPayrollPortability(payrollPortability:any[]){
    if (payrollPortability) {
      for (const payroll of payrollPortability) {
        if (payroll.status==='ACTIVE') {
          this.statusChallenges.push({id:'payroll_portability',status:true})
          break
        }
      }
    }
  }

  checkDigitalChannels(digitalChannels:any[] | undefined){
    
    if (digitalChannels) {
      for (const channel of digitalChannels) {
        if (channel.status==='ACTIVE') {
          this.statusChallenges.push({id:'digital_channels',status:true})
          break
        }
      }
    }
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
    
    let missionPassed:number=0

    this.statusMissions.forEach(status=>{
      const mission= this.challenges.missions[Number(status.mission)]

      status.challenges?.forEach(challenge=>{
        if (mission.mandatoryChallenges.includes(challenge.id) && challenge.status) {
          missionPassed++
        }
        if (mission.specialChallenges.includes(challenge.id) && challenge.status) {
          missionPassed++
        }
      })
    })


    console.log(missionPassed, this.challenges.challengeCount);

    const percent= (missionPassed * 100)/Number(this.challenges.challengeCount)
    return percent
    // let missionsComplete:number=0;
    
    // console.log(this.mandatoryChallenges);
    
    // this.mandatoryChallenges.forEach(mandatory=>{
    //   if (mandatory.status===true) {
    //     missionsComplete++
    //   }
    // })

    // if (this.specialChallenges.length>0) {
      
    //   for (let i = 0; i < this.specialChallenges.length; i++) {
    //     const special = this.specialChallenges[i];
  
    //     if (special.status===true) {
    //       missionsComplete++
    //       break;
    //     }
    //   }
    // }    
    
    // console.log(missionsComplete);
    
    // const percent= (missionsComplete * 100)/Number(this.challenges.challengeCount)
    
    // return percent
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

    if (this.currentPeriod===this.indexTab) {
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
