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
  public cardDetail!: Card;
  public period!: Period;
  specialChallenges: Challenge[] = [];
  challengeActive!: Challenge;
  currentPeriod = 0;
  cutOfDate!: Date;
  indexTab!: number;
  challengesRedirect!: { challenges: [] };
  missions: MissionInterfaces[] = [];
  missionActive!: MissionInterfaces;
  tabs: Tab[] = [];
  statusLikeU!: string;

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private gamificacionFacade: GamificationFacade,
    private tokenFacade: TokenSsoFacade,
    private challengesFacade: ChallengesFacade,
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

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

  closeModal() {
    this.modalService.close(this.viewContainerRef);
  }

  proccessData(resp: ChallengeLikeU) {
    this.statusLikeU = resp.statusChallenge;
    let {
      lower_limit,
      current_limit,
      potential_limit,
      period,
      seen_first_time,
    } = resp;
    const { current_period } = period;

    this.cardDetail = {
      current_limit,
      lower_limit,
      potential_limit,
    };

    this.currentPeriod = Number(current_period);
    this.period = resp.period;
    this.cutOfDate = new Date(resp.cut_of_date);

    this.createMission();

    if (this.statusLikeU === 'CANCELED' && this.currentPeriod < 7) {
      this.indexTab = this.currentPeriod - 1;
    } else if (this.missions[this.currentPeriod]) {
      this.indexTab = this.currentPeriod;
    } else {
      this.indexTab = this.missions.length - 1;
    }
    this.setTimerMission();
    this.showMissionActive(this.indexTab);

    this.propertyChallenges();

    // if (seen_first_time) {
    //   this.showFirstAccess();
    // }

    this.showNotification(current_limit, potential_limit);

    if (this.currentPeriod > 7) {
      if(this.validateAccelerator()){
        this.missions.pop()
        this.indexTab=this.missions.length-1
        this.showMissionActive(this.indexTab)
      }
    }

    this.getTabs();


  }

  showMissionActive(index: number) {
    this.missionActive = this.missions[index];
    this.specialChallenges = this.missionActive.challenges
      ? this.missionActive.challenges.filter(
          (challenge) => challenge.type === 'special'
        )
      : [];
  }

  getTabs() {
    this.missions.forEach((mission) => {
      let tab: Tab = {
        id: '',
        texto: '',
        status: '',
      };

      let idMission = Number(mission.id);
      if (idMission < this.currentPeriod) {
        tab.status = 'finish';
      } else if (
        idMission === this.currentPeriod &&
        this.statusLikeU !== 'CANCELED'
      ) {
        tab.status = 'ongoing';
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

  showFirstAccess() {
    const closeFirstAccess = () => {
      this.closeModal();
    };
    this.modalService.generateFirstAccess(
      this.viewContainerRef,
      closeFirstAccess
    );
  }

  get challenges() {
    return this.challengesFacade.getChallenges();
  }

  get FAQs() {
    return this.challenges.FAQ;
  }

  setTimerMission() {
    this.missions.forEach((mission, index) => {
      if (index === this.currentPeriod && this.statusLikeU !== 'CANCELED') {
        mission.timer = true;
      } else {
        mission.timer = false;
      }
    });
  }

  /**
   * Metodo mediante el cual se asignan las propiedades status y redirect a los challenges
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
          if (statusC) {
            challenge.status = true;
          } else if (!statusC && index < this.currentPeriod) {
            challenge.status = false;
          } else if (!statusC && index >= this.currentPeriod) {
            challenge.status = undefined;
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
   * Metodo mediante el cual se inicializan las misiones
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
   * Metodo mediante el cual se asigna el tipo a cada challenge de cada mision
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
   * Metodo mediante el cual se define el status del challenge
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
        chall.status = this.checkCardPayment(card_payment, dueDate, period_id);
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
        chall.status = this.checkAccelerator(card_payment, dueDate);
        break;
    }
    return chall;
  }

  /**
   * Metodo mediante el cual se valida el status del reto card_payment
   */

  checkCardPayment(
    cardPayment: CardPayment[],
    dueDate: Date,
    periodId: string
  ) {
    let statusCardPayment!: boolean;
    if (cardPayment) {
      for (const card of cardPayment) {
        let { operation_date, minimum_amount, amount_payment } = card;

        operation_date = new Date(operation_date);

        if (periodId === '1' && minimum_amount.amount === 0) {
          statusCardPayment = true;
        } else if (
          amount_payment.amount >= minimum_amount.amount &&
          dueDate > operation_date &&
          minimum_amount.amount >= 0
        ) {
          statusCardPayment = true;
        } else {
          statusCardPayment = false;
        }
      }
    }
    return statusCardPayment;
  }

  /**
   * Metodo mediante el cual se valida el status del reto accelerator
   */

  checkAccelerator(cardPayment: CardPayment[], dueDate: Date) {
    if (cardPayment) {
      for (const card of cardPayment) {
        let operationDate = new Date(card.operation_date);
        let percentPayment =
          card.amount_payment.amount / card.minimum_amount.amount;
        if (percentPayment >= 1.5 && operationDate < dueDate) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Metodo mediante el cual se valida el status del reto accumulated_purchases
   */

  checkAccumulatedPurchases(accumulatedPurchases: CurrentLimit, cutDate: Date) {
    const today = new Date();

    if (accumulatedPurchases && accumulatedPurchases.amount >= 200) {
      return true;
    }
    return false;
  }

  /**
   * Metodo mediante el cual se valida el status del reto recurrent_payment
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
   * Metodo mediante el cual se valida el status del reto domiciliation
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
   * Metodo mediante el cual se valida el status del reto assistance
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
   * Metodo mediante el cual se valida el status del reto payroll_portability
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
   * Metodo mediante el cual se valida el status del reto digital_channels
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
   * Metodo mediante el cual se valida el status de la mision
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
   * Metodo mediante el cual se obtiene el porcentaje
   */
  getPercent() {
    const { lower_limit, current_limit, potential_limit } = this.cardDetail;

    let percent = (current_limit.amount * 100) / potential_limit.amount;

    if (percent > 100) {
      percent = 100;
    } else if (current_limit.amount === lower_limit.amount) {
      percent = 0;
    }
    return percent;
  }

  /**
   * Metodo mediante el cual se muestran las notificaciones
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
        btnAction: () => this.closeModal(),
      };
      if (this.statusLikeU === 'FINAL' || currentLimit.amount===potentialLimit.amount) {
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
   * Metodo mediante el cual se obtienen los retos los cuales van a contar con la propiedad redirect
   */
  getChallengesRedirect(challenges: TokenValidator) {
    this.challengesRedirect = JSON.parse(
      challenges.SecObjRec.SecObjInfoBean.SecObjData[0].SecObjDataValue
    );
  }

  /**
   * Metodo mediante el cual se agrega la propiedad redirect al challenge
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
    return accelerator
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
