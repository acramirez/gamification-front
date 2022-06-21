import { AfterViewInit, Component, OnDestroy, ViewContainerRef } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { GamificationFacade } from '../../services/facades/gamifications.facade';
import { Card } from '../../shared/interfaces/response/icard-details';
import { Tab } from '../../shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from '../../services/facades/challenges.facade';
import { Challenge, Mission, typeChallenge } from '../../shared/interfaces/response/challengesContract.interface';
import { Assistance, CardPayment, CurrentLimit, Period, PeriodDetail } from '../../shared/interfaces/response/gamification.interface';
import { TokenSsoFacade } from '../../services/facades/sso.facade';

import { Router } from '@angular/router';
import { ChallengeLikeU } from '../../shared/interfaces/response/challenges.interface';
import { ModalService } from 'src/app/shared/molecules/modal/modal.service';
import { Notification } from 'src/app/shared/interfaces/notification';
import { Modal } from 'src/app/shared/interfaces/atoms/modal';
import { MissionInterfaces } from 'src/app/shared/interfaces/mission-interfaces';
import { TokenValidator } from 'src/app/shared/interfaces/response/opaqueToken.interface';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css']
})
export class ChallengeLikeuComponent implements OnDestroy, AfterViewInit {

  public cardDetail!: Card;
  public period!: Period;
  mandatoryChallenges: Challenge[] = []
  specialChallenges: Challenge[] = []
  challengeActive!: Challenge;
  currentPeriod: number = 0
  cutOfDate!: Date;
  indexTab!: number
  remainingDays!: number
  missionStatus!: boolean | undefined;
  challengesRedirect: string[] = []

  //New propertys

  missions: MissionInterfaces[] = []
  missionActive!: MissionInterfaces

  // Temporaly

  notification!: Notification

  tabs: Tab[] = [];

  private destroy$!: Subject<any>;

  constructor(
    private gamificacionFacade: GamificationFacade,
    private tokenFacade: TokenSsoFacade,
    private challengesFacade: ChallengesFacade,
    private router: Router,
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngAfterViewInit(): void {

    this.destroy$ = new Subject;

    if (!this.tokenFacade._token) {

      this.tokenFacade.validationToken()
        .toPromise()
        .then(challenges => {

          this.getChallengesRedirect(challenges);

          this.gamificacionFacade.getGamification()
          .pipe(
            catchError(err=>{
              return throwError(err)
            })
          )
            .subscribe(resp => {

            this.proccessData(resp)
          })

        }).catch(err=>{
          console.log(err);
        })
      }
    // } else if (this.tokenFacade._token) {

    //   this.gamificacionFacade.getGamification()
    //     .subscribe(resp => {
    //       // this.proccessData(resp)
    //     })
    // }
  }

  showModal() {
    const modal: Modal = {
      challenge: { ...this.challengeActive },
      close: () => this.closeModal()
    }
    if (modal.challenge.id === 'digitalChannels') {
      modal.challenge.id = 'digital_channel'
    }
    this.modalService.generateModal(this.viewContainerRef, modal)
  }

  closeModal() {
    this.modalService.close(this.viewContainerRef)
  }

  proccessData(resp: ChallengeLikeU) {

    const { lower_limit, current_limit, potential_limit, period,seen_first_time } = resp
    const { current_period } = period

    this.cardDetail = {
      current_limit,
      lower_limit,
      potential_limit
    }
    this.currentPeriod = Number(current_period);
    this.period = resp.period
    this.cutOfDate = new Date(resp.cut_of_date)

    this.createMission();
    this.missionActive = this.missions[this.currentPeriod]

    this.propertyChallenges();
    this.getTabs();
    console.log(this.missions,'2');
    console.log(this.missionActive,'2');
    
    this.specialChallenges=this.missionActive.challenges!.filter(challenge=>challenge.type==="special")

    if (seen_first_time) {
      this.showFirstAccess()
    }

    this.showNotification(current_limit, potential_limit)
  }

  showMissionActive(index: number) {
    this.missionActive = this.missions[index]
    this.specialChallenges=this.missionActive.challenges!.filter(challenge=>challenge.type==="special")

  }

  getTabs() {
    console.log(this.missions,'tabs');
    console.log(this.missionActive,'tabs');
    this.missions.forEach(mission => {
      let tab: Tab = {
        id: '',
        texto: '',
        status: ''
      }

      if (Number(mission.id) < this.currentPeriod) {
        tab.status = 'finish'
      } else if (mission.id === this.currentPeriod.toString()) {
        tab.status = 'ongoing'
      }
      switch (mission.id) {
        case '0':
          tab.texto = 'Intro'
          tab.id = mission.id
          break;

        default:
          tab.texto = `Misión ${mission.id}`
          tab.id = mission.id
          break;
      }

      this.tabs.push(tab);
    })
  }

  showFirstAccess(){
    this.modalService.generateFirstAccess(this.viewContainerRef)
  }

  get challenges() {
    return this.challengesFacade.getChallenges();
  }

  get FAQs() {
    return this.challenges.FAQ
  }

  /**  
   * Metodo mediante el cual se obtienen los challenges de acuerdo al tab seleccionado
  */

  propertyChallenges() {
    
    this.missions.forEach((mission, index) => {
      mission.challenges?.forEach(challenge => {
        console.log(this.missions,'property');
        console.log(this.missionActive,'property');
        challenge.redirection = this.setChallengeRedirect(challenge).redirection
        console.log(this.missions,'property 2');
        console.log(this.missionActive,'property 2');
        if (this.period.period_detail!==null && this.period.period_detail[index]) {
          console.log(this.missions,'property 3');
          console.log(this.missionActive,'property 3');
          let statusC = this.statusChallenge(challenge, this.period.period_detail[index]).status
          if (statusC) {
            challenge.status = true
          } else if (!statusC && index < this.currentPeriod) {
            challenge.status = false
          } else if (!statusC && index >= this.currentPeriod) {
            challenge.status = undefined
          }
        }else{
          challenge.status=undefined
        }
      })
      if (mission.challenges) {
        mission.status = this.statusMission(mission.challenges)
      }
    })

  }

  createMission() {
    const { missions } = this.challenges
    missions.forEach(miss => {
      const mission: MissionInterfaces = {
        id: miss.id,
      }
      mission.challenges = this.typeChallenge(miss)
      this.missions.push(mission)
    })
  }

  typeChallenge(mission: Mission) {
    const { challenges } = this.challenges
    const { mandatoryChallenges, specialChallenges, acceleratorChallenges } = mission
    const challengesMission: Challenge[] = []


    challenges.forEach(challenge => {
      let chall = { ...challenge }
      if (mandatoryChallenges.includes(challenge.id)) {
        chall.type = typeChallenge.mandatory
        challengesMission.push(chall)
      } else if (specialChallenges.includes(challenge.id)) {
        chall.type = typeChallenge.special
        challengesMission.push(chall)
      } else if (acceleratorChallenges.includes(challenge.id)) {
        chall.type = typeChallenge.accelerator
        challengesMission.push(chall)
      }
    })

    return challengesMission
  }

  statusChallenge(challenge: Challenge, periodDetail: PeriodDetail) {
    const {
      accumulated_purchases,
      card_payment,
      recurrent_payment,
      domiciliation,
      assistance,
      payroll_portability,
      digitalChannels,
      due_date

    } = periodDetail

    const chall = { ...challenge }
    switch (challenge.id) {
      case 'accumulated_purchases':
        chall.status = this.checkAccumulatedPurchases(accumulated_purchases, this.cutOfDate)
        break;

      case 'card_payment':
        chall.status = this.checkCardPayment(card_payment)
        break;

      case 'recurrent_payment':
        chall.status = this.checkRecurrentPayment(recurrent_payment, this.cutOfDate)
        break;

      case 'domiciliation':
        chall.status = this.checkDomiciliation(domiciliation, this.cutOfDate)
        break;

      case 'assistance':
        chall.status = this.checkAssistance(assistance, this.cutOfDate)
        break;

      case 'payroll_portability':
        chall.status = this.checkPayrollPortability(payroll_portability, this.cutOfDate)
        break;

      case 'digitalChannels':
        chall.status = this.checkDigitalChannels(digitalChannels, this.cutOfDate)
        break;
        
      case 'higher_payment':
        chall.status = this.checkAccelerator(card_payment)
        break;
    }
    return chall
  }

  checkCardPayment(cardPayment: CardPayment[]) {
    if (cardPayment) {
      for (const card of cardPayment) {
        card.operation_date = new Date(card.operation_date);
        if (card.amount_payment.amount >= card.minimum_amount.amount) {
          return true
        }
      }
    }
    return false
  }

  checkAccelerator(cardPayment: CardPayment[]){
    if (cardPayment) {
      for (const card of cardPayment) {
        card.operation_date = new Date(card.operation_date);
        let percentPayment = card.amount_payment.amount / card.minimum_amount.amount
        if (percentPayment >= 1.5) {
          return true
        }
      }
    }
    return false
  }

  checkAccumulatedPurchases(accumulatedPurchases: CurrentLimit, cutDate: Date) {
    const today = new Date()

    if (accumulatedPurchases && accumulatedPurchases.amount >= 200 && today < cutDate) {
      return true
    }
    return false
  }

  checkRecurrentPayment(recurrentPayment: Assistance[], cutDate: Date) {
    if (recurrentPayment) {
      for (const recurrent of recurrentPayment) {
        recurrent.operation_date = new Date(recurrent.operation_date)

        if (recurrent.status === 'ACTIVE' && recurrent.operation_date && recurrent.operation_date < cutDate) {
          return true
        }
      }
    }
    return false
  }

  checkDomiciliation(domiciliation: any[], cutDate: Date) {
    if (domiciliation) {

      for (const dom of domiciliation) {
        dom.operation_date = new Date(dom.operation_date)

        if (dom.status === 'ACTIVE' && dom.operation_date < cutDate) {
          return true
        }
      }
    }
    return false
  }

  checkAssistance(assistance: any[], cutDate: Date) {
    if (assistance) {
      for (const assis of assistance) {
        assis.operation_date = new Date(assis.operation_date)
        if (assis.status === 'ACTIVE' && assis.operation_date < cutDate) {
          return true
        }
      }
    }
    return false
  }

  checkPayrollPortability(payrollPortability: any[], cutDate: Date) {

    if (payrollPortability) {
      for (const payroll of payrollPortability) {
        payroll.operation_date = new Date(payroll.operation_date)
        if (payroll.status === 'ACTIVE' && payroll.operation_date < cutDate) {
          return true
        }
      }
    }
    return false
  }

  checkDigitalChannels(digitalChannels: any[], cutDate: Date) {
    if (digitalChannels) {
      for (const channel of digitalChannels) {
        channel.operation_date = new Date(channel.operation_date)

        if (channel.status === 'ACTIVE' && channel.operation_date < cutDate) {
          return true
        }
      }
    }
    return false
  }

  statusMission(challenges: Challenge[]) {
    let status: boolean = true;

    const mandatory = challenges.filter(challenge => challenge.type === "mandatory")
    const special = challenges.filter(challenge => challenge.type === "special")

    for (let i = 0; i < special.length; i++) {
      const challenge = challenges[i];
      if (challenge.status === true) {
        status = true
        break;
      } else {
        status = false
      }
    }

    for (let i = 0; i < mandatory.length; i++) {
      const challenge = challenges[i];
      if (challenge.type === 'mandatory' && !challenge.status) {
        status = false
        break;
      }
    }
    return status
  }

  getPercent() {

    const { lower_limit, current_limit, potential_limit } = this.cardDetail

    let totalIncrease = potential_limit.amount - lower_limit.amount;

    let currentIncrease = current_limit.amount - lower_limit.amount;

    let percent = (currentIncrease * 100) / totalIncrease

    return percent
  }

  showNotification(currentLimit: CurrentLimit, potentialLimit: CurrentLimit) {
    const previousPeriod = this.missions[this.currentPeriod - 1]

    if (previousPeriod && Number(previousPeriod.id) >= 1) {
      const cutDate = new Date(previousPeriod.cut_of_date!);
      const today = new Date();

      const { status } = previousPeriod
      const notification =
      {
        icon: '',
        title: '',
        subtitle: '',
        description: '',
        btnAction: () => this.closeModal()
      }

      if (currentLimit.amount === potentialLimit.amount) {
        notification.icon = 'challenge-complete'
        notification.title = '¡Lo has logrado!'
        notification.subtitle = 'Tu límite de crédito ha aumentado'
        notification.description = 'Completaste todas las misiones del reto LikeU y tu límite ha alcanzado su potencial completo.'
      } else if (!status) {
        notification.icon = 'challenge-no-complete'
        notification.title = '¡Lo sentimos!'
        notification.subtitle = 'No has logrado completar el reto LikeU'
        notification.description = 'Desafortunadamente no podrás continuar participando en el reto. Recuerda que puedes continuar usando tu tarjeta.'
      } else if (status) {
        notification.icon = 'mission-complete'
        notification.title = '¡Misión cumplida!'
        notification.subtitle = 'Estás más cerca de alcanzar tu límite potencial'
        notification.description = 'Continúa con los retos de la siguiente misión para avanzar.'
      }
      this.modalService.generateNotification(this.viewContainerRef, notification)
    }
  }

  getChallengesRedirect(challenges: TokenValidator) {
    const cutChallenges = challenges.SecObjRec.SecObjInfoBean.SecObjData[0].SecObjDataValue.split('"challenges": [')
    const cutChallenges2 = cutChallenges[1].split(']')
    this.challengesRedirect = cutChallenges2[0].split(',')
    this.challengesRedirect.forEach((challenge, i) => {
      this.challengesRedirect[i] = challenge.trim().slice(1, -1)
    })


  }

  setChallengeRedirect(challenge: Challenge) {

    const chall = { ...challenge }

    this.challengesRedirect.forEach(redirect => {
      
      if (challenge.id === redirect) {
        chall.redirection = true
      }else if(challenge.id==='digitalChannels' && redirect==='digital_channel'){
        chall.redirection=true
      }
    })

    return chall
  }

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.unsubscribe();
    }
  }

}











