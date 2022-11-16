import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { firstValueFrom, Subject, throwError } from 'rxjs';
import { GamificationFacade } from '../../services/facades/gamifications.facade';
import { Card } from '../../shared/interfaces/response/icard-details';
import { Tab } from '../../shared/interfaces/atoms/tab.interface';
import { ChallengesFacade } from '../../services/facades/challenges.facade';
import {
  Challenge,
  Mission,
  typeChallenge,
} from '../../shared/interfaces/response/challengesContract.interface';
import {
  Assistance,
  CardPayment,
  CurrentLimit,
  Period,
  PeriodDetail,
} from '../../shared/interfaces/response/gamification.interface';
import { TokenSsoFacade } from '../../services/facades/sso.facade';

import { ChallengeLikeU } from '../../shared/interfaces/response/challenges.interface';
import { ModalService } from '../../shared/molecules/modal/modal.service';
import { Modal } from '../../shared/interfaces/atoms/modal';
import { MissionInterfaces } from '../../shared/interfaces/mission-interfaces';
import { TokenValidator } from '../../shared/interfaces/response/opaqueToken.interface';
import { catchError, takeUntil } from 'rxjs/operators';
import { Notification } from '../../shared/interfaces/notification';

@Component({
  selector: 'lu-challenge-likeu',
  templateUrl: './challenge-likeu.component.html',
  styleUrls: ['./challenge-likeu.component.css'],
})
export class ChallengeLikeuComponent implements OnDestroy, AfterViewInit {
  /**
   * Attribute to save percent and limits
   * @param cardDetail
   * @type Card
   * */
  public cardDetail!: Card;

  /**
   * Attribute to save period data
   * @param period
   * @type Period
   * */
  public period!: Period;

  /**
   * Array of special challenges
   * @param specialChallenges
   * @type Challenge[]
   * */
  specialChallenges: Challenge[] = [];

  /**
   * Attribute to save the challenge clicked
   * @param challengeActive
   * @type Challenge
   * */
  challengeActive!: Challenge;

  /**
   * Attribute to save the current period
   * @param currentPeriod
   * @type number
   * */
  currentPeriod = 0;

  /**
   * Attribute to save the cut of date
   * @param cutOfDate
   * @type Date
   * */
  cutOfDate!: Date;

  /**
   * Attribute to save the indexTab
   * @param indexTab
   * @type number
   * */
  indexTab!: number;

  /**
   * Attribute to save challenges with redirection
   * @param challengesRedirect
   * @type Object {challenges:[]}
   * */
  challengesRedirect!: { challenges: [] };

  /**
   * Attribute to save the missions
   * @param missions
   * @type MissionInterfaces[]
   * */
  missions: MissionInterfaces[] = [];

  /**
   * Attribute to save the mission active
   * @param challengesRedirect
   * @type MissionInterfaces
   * */
  missionActive!: MissionInterfaces;

  /**
   * Attribute to save the number tabs and status
   * @param tabs
   * @type Tab[]
   * */
  tabs: Tab[] = [];

  /**
   * Attribute to save the status of challenge likeu
   * @param statusLikeU
   * @type string
   * */
  statusLikeU!: string;
  /**
   * Percent to show in circle progreess
   */
  percent = 0;

  /**
   * Subject for unsuscribe observables
   * @param destroy$
   * @type Object {challenges:[]}
   * */
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private gamificacionFacade: GamificationFacade,
    private tokenFacade: TokenSsoFacade,
    private challengesFacade: ChallengesFacade,
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  /**
   * AfterViewInit life cycle: Component loading view start.
   * Initializes the subscriptions of token and challenge LikeU
   * @returns void
   */
  ngAfterViewInit(): void {
    if (!this.tokenFacade._token) {
      const challenges$ = this.tokenFacade.validationToken();

      const validationToken = async () => {
        await firstValueFrom(challenges$)
          .then((challenges) => {
            this.getChallengesRedirect(challenges);

            this.gamificacionFacade
              .getGamification()
              .pipe(
                catchError((err) => throwError(() => err)),
                takeUntil(this.destroy$)
              )
              .subscribe((resp) => {
                this.proccessData(resp);
              });
          })
          .catch((err) => {
            return throwError(() => err);
          });
      };

      validationToken();
    }
  }

  /**
   * Function show modal for challenges
   * @returns void
   */
  showModal() {
    const modal: Modal = {
      challenge: { ...this.challengeActive },
      close: () => this.closeModal(),
    };
    if (modal.challenge.id === 'digital_channel') {
      modal.challenge.id = 'digital_channel';
    }
    this.modalService.generateModal(this.viewContainerRef, modal);
  }

  /**
   *Close modal challenges
   * @returns void
   */
  closeModal() {
    this.modalService.close(this.viewContainerRef);
  }

  /**
   * Function to:
   * Initializes: statusLikeU, cardDetail,currentPeriod, period, cutOfDate
   *
   * Execute: createMission(), setTimerMission(), showMissionActive(), propertyChallenges(), getTabs(), showFirstAccess() and showNotification()
   * @param {ChallengeLikeU} resp Response susbscription challenge LikeU
   * @returns {void}
   */
  proccessData(resp: ChallengeLikeU) {
    this.statusLikeU = resp.statusChallenge;
    let { lower_limit, current_limit, potential_limit, period } = resp;
    const { current_period } = period;

    this.cardDetail = {
      current_limit,
      lower_limit,
      potential_limit,
    };

    this.currentPeriod = Number(current_period);
    this.period = resp.period;
    if (resp.cut_of_date) {
      this.cutOfDate = new Date(resp.cut_of_date);
    }

    this.createMission();

    if (
      this.statusLikeU === 'CANCELED' &&
      this.currentPeriod < 7 &&
      this.currentPeriod > 0
    ) {
      this.indexTab = this.currentPeriod - 1;
    } else if (this.missions[this.currentPeriod]) {
      this.indexTab = this.currentPeriod;
    } else {
      this.indexTab = this.missions.length - 1;
    }
    this.setTimerMission();
    this.showMissionActive(this.indexTab);

    this.propertyChallenges();

    this.showNotification(current_limit, potential_limit);

    if (this.currentPeriod > 7) {
      if (this.validateAccelerator()) {
        this.missions.pop();
        this.indexTab = this.missions.length - 1;
        this.showMissionActive(this.indexTab);
      }
    }

    this.getTabs();
  }

  /**
   * Function to show mission active for index
   * @param {Number} index Mission Index
   * @returns void
   */
  showMissionActive(index: number) {
    this.missionActive = this.missions[index];
    this.specialChallenges = this.missionActive.challenges
      ? this.missionActive.challenges.filter(
          (challenge) => challenge.type === 'special'
        )
      : [];
  }

  /**
   * Function get tabs missions
   * @returns void
   */
  getTabs() {
    this.missions.forEach((mission) => {
      let tab: Tab = {
        id: '',
        texto: '',
        status: '',
      };

      let idMission = Number(mission.id);

      if (idMission === this.indexTab && this.statusLikeU === 'EVALUATION') {
        tab.status = 'ongoing';
      } else if (idMission <= this.indexTab) {
        if (mission.status) {
          tab.status = 'finish';
        } else if (!mission.status && this.statusLikeU === 'CANCELED') {
          tab.status = 'failed';
        }
      }

      if (mission.id === '0') {
        tab.texto = 'Intro';
        tab.id = mission.id;
      } else {
        tab.texto = `Misión ${mission.id}`;
        tab.id = mission.id;
      }

      this.tabs.push(tab);
    });
  }

  /**
   * Function show view first access
   * @returns void
   */
  showFirstAccess() {
    const closeFirstAccess = () => {
      this.closeModal();
    };
    this.modalService.generateFirstAccess(
      this.viewContainerRef,
      closeFirstAccess
    );
  }

  /**
   * Get challenges
   * @returns Challenges Contract
   */
  get challenges() {
    return this.challengesFacade.getChallenges();
  }

  /**
   * Get Frequently Questions
   * @returns frequently questions
   */
  get FAQs() {
    return this.challenges.FAQ;
  }

  /**
   * Function to assign if show timer
   * @returns void
   */
  setTimerMission() {
    this.missions.forEach((mission, index) => {
      if (
        this.cutOfDate &&
        index === this.indexTab &&
        this.statusLikeU === 'EVALUATION'
      ) {
        mission.timer = true;
      } else {
        mission.timer = false;
      }
    });
  }

  /**
   * Function to assign the status of challenges
   * @returns void
   */
  propertyChallenges() {
    this.missions.forEach((mission, index) => {
      mission.challenges?.forEach((challenge) => {
        challenge.redirection = this.setChallengeRedirect(challenge);
        const { period_detail } = this.period;
        if (
          period_detail !== null &&
          period_detail[index] &&
          Number(period_detail[index].period_id) > 0
        ) {
          let statusC = this.statusChallenge(
            challenge,
            this.period.period_detail[index]
          ).status;

          if (statusC && index <= this.indexTab) {
            challenge.status = true;
          } else if (!statusC && index < this.currentPeriod) {
            challenge.status = false;
          }
        } else {
          challenge.status = undefined;
        }
      });
      if (mission.challenges) {
        let statusMission = this.statusMission(mission.challenges, index);
        mission.status = statusMission;
        if (statusMission === false && index < this.currentPeriod) {
          this.indexTab = index;
          this.showMissionActive(index);
        }
      }
    });
  }

  /**
   * Function to create array missions
   * @returns {void} void
   */
  createMission() {
    const { missions } = this.challenges;
    missions.forEach((miss) => {
      const mission: MissionInterfaces = {
        id: miss.id,
      };
      mission.challenges = this.typeChallenge(miss);
      this.missions.push(mission);
    });

    if (this.statusLikeU === 'FINAL' && this.currentPeriod === 7) {
      this.missions.pop();
    }
  }

  /**
   * Function to assign the type to the challenges of the mission
   * @param mission
   * @returns array of challenges with update status
   */
  typeChallenge(mission: Mission) {
    const { challenges } = this.challenges;
    const { mandatoryChallenges, specialChallenges, acceleratorChallenges } =
      mission;
    const challengesMission: Challenge[] = [];

    challenges.forEach((challenge) => {
      let chall = { ...challenge };
      if (mandatoryChallenges.includes(challenge.id)) {
        chall.type = typeChallenge.mandatory;
        challengesMission.push(chall);
      } else if (specialChallenges.includes(challenge.id)) {
        chall.type = typeChallenge.special;
        challengesMission.push(chall);
      } else if (acceleratorChallenges.includes(challenge.id)) {
        chall.type = typeChallenge.accelerator;
        challengesMission.push(chall);
      }
    });

    return challengesMission;
  }

  /**
   * Function to update the status of a challenge
   * @param challenge challenge to update status
   * @param periodDetail Information to dterminate the status of challenges
   * @returns Challenge
   */
  statusChallenge(challenge: Challenge, periodDetail: PeriodDetail) {
    const {
      accumulated_purchases,
      card_payment,
      recurrent_payment,
      domiciliation,
      assistance,
      payroll_portability,
      digital_channels,
      period_id,
    } = periodDetail;

    const periodId= Number(period_id)
    let previousCardPayment=this.period.period_detail[periodId].card_payment
    if (periodId>0) {
      previousCardPayment=this.period.period_detail[periodId-1].card_payment
    }
    let { due_date } = periodDetail;

    const dueDate = new Date(due_date);

    const chall = { ...challenge };
    switch (challenge.id) {
      case 'accumulated_purchases':
        chall.status = this.checkAccumulatedPurchases(
          accumulated_purchases,
          this.cutOfDate
        );
        break;

      case 'card_payment':
        chall.status = this.checkCardPayment(card_payment, previousCardPayment, dueDate, period_id);
        break;

      case 'recurrent_payment':
        chall.status = this.checkRecurrentPayment(
          recurrent_payment,
          this.cutOfDate
        );
        break;

      case 'domiciliation':
        chall.status = this.checkDomiciliation(domiciliation, this.cutOfDate);
        break;

      case 'assistance':
        chall.status = this.checkAssistance(assistance, this.cutOfDate);
        break;

      case 'payroll_portability':
        chall.status = this.checkPayrollPortability(
          payroll_portability,
          this.cutOfDate
        );
        break;

      case 'digital_channels':
        chall.status = this.checkDigitalChannels(
          digital_channels,
          this.cutOfDate
        );
        break;

      case 'higher_payment':
        chall.status = this.checkAccelerator(card_payment,previousCardPayment, dueDate);
        break;
    }
    return chall;
  }

  /**
   * Function check if card payment its true
   * @param cardPayment card payment data
   * @param dueDate deadline for payment
   * @param periodId period to evaluate
   * @returns boolean
   */
  checkCardPayment(
    cardPayment: CardPayment[],
    prevCardPayment:CardPayment[],
    dueDate: Date,
    periodId: string | number
  ) {
    let statusCardPayment!: boolean;
    periodId = Number(periodId);

    if (cardPayment && prevCardPayment) {
      for (const card of cardPayment) {
        for (const prevCard of prevCardPayment) {
          let { operation_date, amount_payment } = card;
          let { minimum_amount } = prevCard;
          operation_date = new Date(operation_date);
          statusCardPayment = this.statusCardPayment(
            amount_payment,
            minimum_amount,
            operation_date,
            periodId,
            dueDate
          );
        }
      }
    }
    return statusCardPayment;
  }

  /**
   *  Function returns a boolean with status for mission cardPayment
   * @param amountPayment amount to pay
   * @param minimumAmount minimum to pay
   * @param operationDate date of the payment operation
   * @param periodId currrent period
   * @param dueDate date payment limit
   * @returns {boolean} status mision cardPayment
   */
  statusCardPayment(
    amountPayment: CurrentLimit,
    minimumAmount: CurrentLimit,
    operationDate: Date,
    periodId: number,
    dueDate: Date
  ) {

    if (periodId === 1 && minimumAmount.amount === 0) {
      return true;
    } else if (
      amountPayment.amount >= minimumAmount.amount &&
      dueDate > operationDate &&
      minimumAmount.amount >= 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Function to evaluate if the acclerator is activated (1.5)
   * @param cardPayment card payment data
   * @returns return boolean
   */
  checkAccelerator(cardPayment: CardPayment[], prevCardPayment:CardPayment[], dueDate: Date) {

    if (cardPayment && prevCardPayment) {
      for (const card of cardPayment) {
        for (const prevCard of prevCardPayment) {
          const {amount_payment} = card
          const {minimum_amount} = prevCard
          let operationDate = new Date(card.operation_date);
          let percentPayment = amount_payment.amount / minimum_amount.amount;
          if (percentPayment >= 1.5 && operationDate < dueDate) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * Function to evaluate if accumulated purchases > 200
   * @param accumulatedPurchases accumulated purchases data
   * @param cutDate deadline for accumulated purchases
   * @returns boolean
   */
  checkAccumulatedPurchases(accumulatedPurchases: CurrentLimit, cutDate: Date) {
    if (accumulatedPurchases && accumulatedPurchases.amount >= 200) {
      return true;
    }
    return false;
  }

  /**
   * Function to evaluate if a recurrent payment activation exist
   * @param recurrentPayment recurrent payment data of period detail
   * @param cutDate deadline to validate the recurrent payment
   * @returns boolean
   */
  checkRecurrentPayment(recurrentPayment: Assistance[], cutDate: Date) {
    if (recurrentPayment) {
      for (const recurrent of recurrentPayment) {
        recurrent.operation_date = new Date(recurrent.operation_date);

        if (
          recurrent.status === 'ACTIVE' &&
          recurrent.operation_date &&
          recurrent.operation_date < cutDate
        ) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Function to evaluate if a domiciliation exist
   * @param domiciliation Domiciliation data
   * @param cutDate deadline to validatee the domiciliation
   * @returns boolean
   */
  checkDomiciliation(domiciliation: any[], cutDate: Date) {
    if (domiciliation) {
      for (const dom of domiciliation) {
        dom.operation_date = new Date(dom.operation_date);

        if (dom.status === 'ACTIVE' && dom.operation_date < cutDate) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Function to evaluate if a assistance activation exist
   * @param assistance assistance data
   * @param cutDate deadline to validate assistance
   * @returns boolean
   */
  checkAssistance(assistance: any[], cutDate: Date) {
    if (assistance) {
      for (const assis of assistance) {
        assis.operation_date = new Date(assis.operation_date);
        if (assis.status === 'ACTIVE' && assis.operation_date < cutDate) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Function to evaluate if a payroll portability exist
   * @param payrollPortability portability data
   * @param cutDate deadline to validate payroll portability
   * @returns boolean
   */
  checkPayrollPortability(payrollPortability: any[], cutDate: Date) {
    if (payrollPortability) {
      for (const payroll of payrollPortability) {
        payroll.operation_date = new Date(payroll.operation_date);
        if (payroll.status === 'ACTIVE' && payroll.operation_date < cutDate) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Function to validate if a digital channels exist
   * @param digitalChannels digital channels data
   * @param cutDate deadline to validate digital channels
   * @returns boolean
   */
  checkDigitalChannels(digitalChannels: any[], cutDate: Date) {
    if (digitalChannels) {
      for (const channel of digitalChannels) {
        channel.operation_date = new Date(channel.operation_date);

        if (channel.status === 'ACTIVE' && channel.operation_date < cutDate) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Function to evaluate and update status missions
   * @param challenges challenges to evaluate
   * @param missionIndex mission index to validate your challenges
   * @returns boolean
   */
  statusMission(challenges: Challenge[], missionIndex: number) {
    let statusMission = true;
    const mandatory = challenges.filter(
      (challenge) => challenge.type === 'mandatory'
    );
    const special = challenges.filter(
      (challenge) => challenge.type === 'special'
    );
    let statusSpecial: Challenge[] = [];

    if (special.length > 0) {
      statusSpecial = special.filter((spec) => spec.status === true);
    }

    const statusMandatory = mandatory.filter((mand) => mand.status === false);
    if (statusMandatory.length > 0) {
      statusMission = this.validationDigitalChannels(
        statusMandatory,
        missionIndex
      );
    } else if (special.length > 0 && statusSpecial.length === 0) {
      statusMission = false;
    } else if (missionIndex >= 6) {
      let statusDC5 = this.missions[missionIndex - 1].challenges?.filter(
        (challenge) =>
          challenge.id === 'digital_channels' && challenge.status === false
      );
      let statusDC4 = this.missions[missionIndex - 2].challenges?.filter(
        (challenge) =>
          challenge.id === 'digital_channels' && challenge.status === false
      );
      if (
        (statusDC4 && statusDC4.length > 0) ||
        (statusDC5 && statusDC5.length > 0)
      ) {
        statusMission = false;
      }
    }
    return statusMission;
  }

  /**
   * Function to validate the digital channels in 3 months from mission 6
   * @param statusMandatory status mandatory to evaluate
   * @param missionIndex mission index to validate mandatory challenges
   * @returns boolean
   */
  validationDigitalChannels(
    statusMandatory: Challenge[],
    missionIndex: number
  ) {
    const digitalChannell = statusMandatory.filter(
      (challengeDigital) => challengeDigital.id === 'digital_channels'
    );
    if (
      digitalChannell.length > 0 &&
      missionIndex < 6 &&
      statusMandatory.length === 1
    ) {
      return true;
    }
    return false;
  }

  /**
   * Function to get percent (current limit/potential limit)
   * @returns number
   */
  getPercent() {
    const { lower_limit, current_limit, potential_limit } = this.cardDetail;

    let percent = current_limit.amount / potential_limit.amount;

    if (percent > 1) {
      percent = 1;
    } else if (current_limit.amount === lower_limit.amount) {
      percent = 0;
    }
    this.percent = percent;
  }

  /**
   * Function to show notifications using the status flag
   */
  showNotification(currentLimit: CurrentLimit, potentialLimit: CurrentLimit) {
    const previousPeriod = this.missions[this.currentPeriod - 1];

    if (previousPeriod && Number(previousPeriod.id) >= 0) {
      const { status } = previousPeriod;

      const notification: Notification = {
        icon: '',
        title: '',
        subtitle: '',
        description: [],
        btnAction: () => this.btnActionNotification(),
      };
      if (
        this.statusLikeU === 'FINAL' ||
        currentLimit.amount === potentialLimit.amount
      ) {
        notification.icon = 'challenge-complete';
        notification.title = '¡Felicidades!';
        notification.subtitle = 'Conseguiste el 100% de tu límite potencial';
        notification.description.push(
          'Finalizaste exitosamente el Reto LikeU.'
        );
      } else if (!status || this.statusLikeU === 'CANCELED') {
        notification.icon = 'challenge-no-complete';
        notification.title = '¡Lo sentimos!';
        notification.subtitle = 'No completaste el reto LikeU';
        notification.description.push(
          'Tu límite de crédito actual se mantendrá sin cambios, sigue usando tu tarjeta LikeU.',
          'Recuerda que el uso responsable de tu tarjeta te ayudará a crear un historial crediticio positivo y así podrás incrementar tu línea de crédito muy pronto.'
        );
      } else if (this.statusLikeU === 'EVALUATION') {
        if (status && this.currentPeriod <= 4) {
          notification.icon = 'cycle-complete';
          notification.title = '¡Lo lograste!';
          notification.subtitle = `Cumpliste la misión ${
            this.currentPeriod - 1
          }`;
          notification.description.push(
            'Continúa cumpliendo las siguientes misiones para avanzar en el Reto LikeU.'
          );
        } else {
          notification.icon = 'mission-complete';
          notification.title = `¡Misión ${this.currentPeriod - 1} completada!`;
          notification.subtitle =
            'Tu límite de crédito ha aumentado y estás más cerca de la meta';
          notification.description.push(
            'Continúa con la siguiente misión para avanzar en el Reto.'
          );
        }
      }

      this.modalService.generateNotification(
        this.viewContainerRef,
        notification
      );
    }
  }

  /**
   * Function to get challenges that have redirection
   * @param challenges response validate opaque token
   */
  getChallengesRedirect(challenges: TokenValidator) {
    this.challengesRedirect = JSON.parse(
      challenges.SecObjRec.SecObjInfoBean.SecObjData[0].SecObjDataValue
    );
  }

  /**
   * Function to set th redirection
   * @param challenge challenges redirection
   * @returns boolean
   */
  setChallengeRedirect(challenge: Challenge) {
    const chall = { ...challenge };
    chall.redirection = false;
    if (this.challengesRedirect.challenges) {
      this.challengesRedirect.challenges.forEach((redirect) => {
        if (challenge.id === redirect) {
          chall.redirection = true;
        }
      });
    }

    return chall.redirection;
  }

  /**
   * Validate the accelerator challenge from previous missions
   * @returns boolean
   */
  validateAccelerator() {
    let missions = this.missions.slice(4, 7);
    let accelerator = true;

    for (let i = 0; i < missions.length; i++) {
      const { challenges } = missions[i];

      let higherPayment = challenges?.filter(
        ({ id }) => id === 'higher_payment'
      );

      if (higherPayment && higherPayment[0].status === false) {
        accelerator = false;
        break;
      }
    }
    return accelerator;
  }

  /**
   * Function to the actions for button continue notification
   */
  btnActionNotification() {
    this.closeModal();
    this.getPercent();
  }

  /**
   * OnDestroy life cycle: Destroy component and unsuscribe observables
   * @returns void
   */
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
