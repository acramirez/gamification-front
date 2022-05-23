import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { forkJoin, Subject, Subscription, throwError, timer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GamificationFacade } from '../../services/facades/gamifications.facade';
import { Card } from '../../shared/interfaces/response/icard-details';
import { Tab } from '../../shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from '../../services/facades/challenges.facade';
import { Challenge } from '../../shared/interfaces/response/challengesContract.interface';
import { CardPayment, CurrentLimit, Period, PeriodDetail, RecurrentPayment } from '../../shared/interfaces/response/gamification.interface';
import { StatusChallenges, StatusMissions } from '../../shared/interfaces/checkChallenges.interface';
import { challengesFather } from '../../../assets/data/constant/data.constant';
import { TokenSsoFacade } from '../../services/facades/sso.facade';

import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from '../../services/apis/error.service';
import { ChallengeLikeU } from '../../shared/interfaces/response/challenges.interface';


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
  dueDay!:Date

  indexTab!:number
  remainingDays!:number | string | null
  resp!:ChallengeLikeU
  statusChallenges:StatusChallenges[]=[]

  challengesRedirect:string[]=[]



  timer$!:Subscription;
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
            
            const cutChallenges=resp[0].SecObjRec.SecObjInfoBean.SecObjData[0].SecObjDataValue.split('"challenges": [')
            const cutChallenges2=cutChallenges[1].split(']')
            this.challengesRedirect=cutChallenges2[0].split(',')
            
            this.challengesRedirect.forEach((challenge,i)=>{
              this.challengesRedirect[i]=challenge.trim().slice(1,-1)
            })

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
    const{current_limit,potential_limit,period}=resp
    this.cardDetail={current_limit,potential_limit}
    this.period=period;
    this.currentPeriod=Number(period.current_period)
    this.indexTab=this.currentPeriod
    
    this.getTabs(period);
    this.checkChallenges();
    this.getChallenges(this.currentPeriod);
    this.getPercent();

    this.dueDay=new Date(resp.period.period_detail[this.currentPeriod].due_date)
    
    if (this.dueDay) {
      
      this.getTime(this.dueDay)
      
      this.timer$=timer(0,1000).subscribe(()=>
        {            
          
          let time=this.getTime(this.dueDay)
          if(typeof time === 'number'){
            this.remainingDays= this.transformSeconds(time);
          }
          
        }
      );
    }

    this.messageNotification(resp);
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

/**  
 * Metodo mediante el cual se obtienen los challenges de acuerdo al tab seleccionado
*/
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

    this.setChallengeRedirect();
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

    const percent= (missionPassed * 100)/Number(this.challenges.challengeCount)
    return percent
  }

  setChallengeRedirect(){
    this.challengesRedirect.forEach(challenge=>{
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

  getTime(date:Date){    
    
    if (this.currentPeriod===this.indexTab) {
      
      const currenDate=new Date().getTime()
      const dueDate=date.getTime();
  
      const result= dueDate-currenDate
      
      let days:number | string=result/(1000)
      
      return days
      
    }
    return null
  }


  transformSeconds(segundos:number){
    let hour:number | string= Math.floor(segundos/3600)
    hour=(hour<10)?'0' + hour:hour
    let minutes:number | string= Math.floor((segundos/60)%60)
    minutes=(minutes<10)?'0' + minutes:minutes
    let seconds:number | string= Math.floor(segundos%60)
    seconds=(seconds<10)?'0' + seconds:seconds

    let resp=''
    if (segundos<0) {
      resp = Math.round(segundos/(60 * 60 * 24)) + ' días'
    } else if (typeof hour === 'number' && hour>=24) {
      resp = Math.round(hour/24) + ' días'
    }else if(hour==0){
      resp = hour + ':' + minutes + ':' + seconds +' min'
    }else if(hour==0  && minutes == 0){
      resp = hour + ':' + minutes + ':' + seconds +' sec'
    }else{
      resp = hour + ':' + minutes + ':' + seconds +' hrs'
    }

    return resp

  }


  messageNotification(resp:ChallengeLikeU){

    const {period,current_limit,potential_limit}=resp

    const {current_period,period_detail} = period

    const previousPeriod= Number(current_period) - 1
    const previousPeriodDetail=period_detail[previousPeriod]

    if (previousPeriodDetail && previousPeriodDetail.status==='FINISH') {
      const dueDate=new Date(period_detail[previousPeriod].due_date)

      const date=new Date();
      
      if (date>dueDate && !this.gamificacionFacade.message) {
        
        const status=this.getStatusMission(2)

        if (current_limit.amount===potential_limit.amount) {
          this.router.navigate(['notificacion','lo-has-logrado'])
        }else if(!status){
          this.router.navigate(['notificacion','lo-sentimos'])
        }else if(status){
          this.router.navigate(['notificacion','mision-cumplida'])
        }
        
        this.gamificacionFacade.message=true;
      }

      
    }

  }


  getStatusMission(index:number):boolean{

    let status=true

    console.log(this.challenges.missions[index]);
    console.log(this.statusMissions[index]);

    
    if (this.statusMissions[index]) {
    const {challenges}=this.statusMissions[index]
    const {mandatoryChallenges,specialChallenges,acceleratorChallenges}=this.challenges.missions[index]
    
      
      const statusMandatory=(challenge:StatusChallenges)=>{
        if (mandatoryChallenges.includes(challenge.id)) {
          return true
        }
        return false
      };
  
  
      const statusSpecial=(challenge:StatusChallenges)=>{
        if (specialChallenges.includes(challenge.id)) {
          return true
        }
        return false
      };
  
  
      const mandatoryChallengesStatus= challenges?.filter(statusMandatory)
      const specialChallengesStatus= challenges?.filter(statusSpecial)
  
  
      if(mandatoryChallengesStatus && mandatoryChallengesStatus?.length!== mandatoryChallenges.length){
        status=false
      }else if (specialChallengesStatus && specialChallengesStatus?.length<1 && specialChallenges.length>0) {
        status=false
      }
      console.log(mandatoryChallengesStatus);
      console.log(specialChallengesStatus);
      console.log(status);
    }

    return status
  }


  ngOnDestroy(): void {
    this.destroy$.unsubscribe();

    setTimeout(() => {
      this.timer$.unsubscribe()
    }, 1000);
  }

}
