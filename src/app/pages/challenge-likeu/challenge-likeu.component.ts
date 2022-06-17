import { AfterViewInit, Component, OnDestroy, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { GamificationFacade } from '../../services/facades/gamifications.facade';
import { Card } from '../../shared/interfaces/response/icard-details';
import { Tab } from '../../shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from '../../services/facades/challenges.facade';
import { Challenge } from '../../shared/interfaces/response/challengesContract.interface';
import { Assistance, CardPayment, CurrentLimit, Period } from '../../shared/interfaces/response/gamification.interface';
import { StatusChallenges, StatusMissions } from '../../shared/interfaces/checkChallenges.interface';
import { TokenSsoFacade } from '../../services/facades/sso.facade';

import { Router } from '@angular/router';
import { ChallengeLikeU } from '../../shared/interfaces/response/challenges.interface';
import { TokenValidator } from 'src/app/shared/interfaces/response/opaqueToken.interface';
import { ModalService } from 'src/app/shared/molecules/modal/modal.service';
import { GamificationCallbacksService } from 'src/app/services/gamification-callbacks.service';
import { Notification } from 'src/app/shared/interfaces/notification';
import { Modal } from 'src/app/shared/interfaces/atoms/modal';


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
  // dueDay!:Date;
  cutOfDate!:Date;
  indexTab!:number
  remainingDays!:number
  statusChallenges:StatusChallenges[]=[]
  missionStatus!:boolean | undefined;

  challengesRedirect:string[]=[]



  // Temporaly
  
  notification!:Notification

  // @ViewChild('challengeLikeU',{read:ViewContainerRef}) challengeLikeU!:ViewContainerRef

  tabs:Tab[]=[];

  private destroy$!:Subject<any>;

  constructor(
    private gamificacionFacade: GamificationFacade,
    private tokenFacade: TokenSsoFacade,
    private challengesFacade: ChallengesFacade,
    private router:Router,
    private modalService:ModalService,
    private viewContainerRef:ViewContainerRef,
  ) { }


  ngAfterViewInit(): void {

    this.destroy$=new Subject;
    
    if (!this.tokenFacade._token) {

      this.tokenFacade.validationToken()
        .toPromise()
          .then(challenges=>{
            
            this.getChallengesRedirect(challenges);
             
            this.gamificacionFacade.getGamification().subscribe(resp=>{
              this.proccessData(resp)
            })
          })

    }else if (this.tokenFacade._token) {
      
      this.gamificacionFacade.getGamification()
      .subscribe(resp=>{
        this.proccessData(resp)
      })     
    }

  }

  showModal(){
    const modal:Modal={
      ...this.challengeActive,
      close:()=>this.closeModal()
    }
    if (modal.id==='digitalChannels') {
      modal.id='digital_channel'
    }
    this.modalService.generateModal(this.viewContainerRef,modal)
  }

  closeModal(){
    this.modalService.close(this.viewContainerRef)
  }

  proccessData(resp:ChallengeLikeU){
    
    const{current_limit,potential_limit,period, lower_limit}=resp
    this.cardDetail={current_limit,potential_limit,lower_limit}
    this.period=period;
    this.currentPeriod=Number(period.current_period)
    this.indexTab=this.currentPeriod
    this.cutOfDate=new Date(resp.cut_of_date as Date)
        
    this.getTabs(period);

    this.checkChallenges();
    this.getChallenges(this.currentPeriod);
    this.getPercent();
    

    // this.dueDay=new Date(resp.period.period_detail[this.currentPeriod].due_date)
    
    this.messageNotification(resp);
    this.modalService.generateNotification(this.viewContainerRef,this.notification)
  }

  get challenges(){
    return this.challengesFacade.getChallenges();
  }

  get FAQs(){
    return this.challenges.FAQ
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
    this.missionStatus=this.getStatusMission(tab);
    
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
        digitalChannels,
        due_date
      } = period      
      
      this.checkCardPayment(card_payment, due_date);

      this.checkAccumulatedPurchases(accumulated_purchases,this.cutOfDate);

      this.checkRecurrentPayment(recurrent_payment,this.cutOfDate);

      this.checkDomiciliation(domiciliation,this.cutOfDate);

      this.checkAssistance(assistance,this.cutOfDate);
      
      this.checkPayrollPortability(payroll_portability,this.cutOfDate)

      this.checkDigitalChannels(digitalChannels,this.cutOfDate)
            
      this.statusMissions.push({mission:period.period_id,challenges:this.statusChallenges})
      this.statusChallenges=[];
      
    })
  }

  checkCardPayment(cardPayment:CardPayment[],dueDate:Date){
    
    if(cardPayment){
      dueDate=new Date(dueDate)
      for (const card of cardPayment) {
        card.operation_date = new Date(card.operation_date);
        if(card.amount_payment.amount>card.minimum_amount.amount && card.operation_date<dueDate){
          this.statusChallenges.push({id:'card_payment',status:true})
          break
        }
      }
    }
  }

  checkAccumulatedPurchases(accumulatedPurchases:CurrentLimit, cutDate:Date){
    const today=new Date()
    
    if (accumulatedPurchases && accumulatedPurchases.amount>=200 && today<cutDate) {
      this.statusChallenges.push({id:'minimum_monthly_billing',status:true})
    }
  }

  checkRecurrentPayment(recurrentPayment:Assistance[],cutDate:Date){
    if (recurrentPayment) {
      for (const recurrent of recurrentPayment) {
        recurrent.operation_date= new Date(recurrent.operation_date)

        if (recurrent.status==='ACTIVE' && recurrent.operation_date && recurrent.operation_date<cutDate) {
          this.statusChallenges.push({id:'recurrent_payment',status:true});
          break;
        }
      }
    }
  }

  checkDomiciliation(domiciliation:any[], cutDate:Date){
    if (domiciliation) {
      
      for (const dom of domiciliation) {
        dom.operation_date= new Date(dom.operation_date)

        if (dom.status==='ACTIVE' && dom.operation_date<cutDate) {
          this.statusChallenges.push({id:'domicialitation',status:true})
          break
        }
      }
    }
  }

  checkAssistance(assistance:any[], cutDate:Date){
    if (assistance ) {
      for (const assis of assistance) {
        assis.operation_date= new Date(assis.operation_date)
        if (assis.status==='ACTIVE' && assis.operation_date<cutDate) {
          this.statusChallenges.push({id:'assistance',status:true})
          break
        }
      }
    }
  }

  checkPayrollPortability(payrollPortability:any[], cutDate:Date){

    if (payrollPortability) {
      for (const payroll of payrollPortability) {
        payroll.operation_date= new Date(payroll.operation_date)
        if (payroll.status==='ACTIVE' && payroll.operation_date<cutDate) {
          this.statusChallenges.push({id:'payroll_portability',status:true})
          break
        }
      }
    }
  }

  checkDigitalChannels(digitalChannels:any[], cutDate:Date ){
        
    if (digitalChannels) {
      for (const channel of digitalChannels) {
        channel.operation_date= new Date(channel.operation_date)
        
        if (channel.status==='ACTIVE' && channel.operation_date<cutDate) {
          this.statusChallenges.push({id:'digital_channel',status:true})
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

    const {lower_limit,current_limit,potential_limit}=this.cardDetail

    let totalIncrease=potential_limit.amount-lower_limit.amount;

    let currentIncrease=current_limit.amount-lower_limit.amount;

    let percent=(currentIncrease * 100) / totalIncrease
    
    return percent
  }

  getChallengesRedirect(challenges:TokenValidator){
    const cutChallenges=challenges.SecObjRec.SecObjInfoBean.SecObjData[0].SecObjDataValue.split('"challenges": [')
    const cutChallenges2=cutChallenges[1].split(']')
    this.challengesRedirect=cutChallenges2[0].split(',')
    this.challengesRedirect.forEach((challenge,i)=>{
    this.challengesRedirect[i]=challenge.trim().slice(1,-1)
    })
  }

  setChallengeRedirect(){
    this.challengesRedirect.forEach(challenge=>{
      this.mandatoryChallenges.forEach(mandatory=>{
        
        if(mandatory.id===challenge){
          mandatory.redirection=true
        }
        else if(challenge==='digital_channel' && mandatory.id==='digitalChannels'){
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

  messageNotification(resp:ChallengeLikeU){

    const {period,current_limit,potential_limit}=resp

    const {current_period,period_detail} = period

    const previousPeriod= Number(current_period) - 1
    const previousPeriodDetail=period_detail[previousPeriod]

    if (previousPeriodDetail && previousPeriodDetail.status==='FINISH' && previousPeriod>=1) {
      const dueDate=new Date(period_detail[previousPeriod].due_date)

      const date=new Date();
      
      if (date>dueDate && this.gamificacionFacade.message) {
        
        const notification={
          icon:'',
          title:'',
          subtitle:'',
          description:'',
          btnAction:()=>this.closeModal()
        }
        
          const status=this.getStatusMission(previousPeriod)
          
          if (current_limit.amount===potential_limit.amount) {
            notification.icon='challenge-complete'
            notification.title='¡Lo has logrado!'
            notification.subtitle='Tu límite de crédito ha aumentado'
            notification.description='Completaste todas las misiones del reto LikeU y tu límite ha alcanzado su potencial completo.'
          }else if(!status){
            notification.icon='challenge-no-complete'
            notification.title='¡Lo sentimos!'
            notification.subtitle='No has logrado completar el reto LikeU'
            notification.description='Desafortunadamente no podrás continuar participando en el reto. Recuerda que puedes continuar usando tu tarjeta.'
          }else if(status){
            notification.icon='mission-complete'
            notification.title='¡Misión cumplida!'
            notification.subtitle='Estás más cerca de alcanzar tu límite potencial'
            notification.description='Continúa con los retos de la siguiente misión para avanzar.'
          }
          console.log(notification);
          
          this.modalService.generateNotification(this.viewContainerRef,notification)
        }
    }

  }

  getStatusMission(index:number):boolean | undefined{

    let status=undefined
 
    if (this.statusMissions[index]) {
    const {challenges}=this.statusMissions[index]
    const {mandatoryChallenges,specialChallenges}=this.challenges.missions[index]
    
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
    }

    return status
  }


  showFirstAccess(seenFirstTime:boolean){
    if (seenFirstTime  && !this.gamificacionFacade.firstaccess) {
      this.router.navigateByUrl('bienvenido')
    }
  }


  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.unsubscribe();
    }
  }

}











