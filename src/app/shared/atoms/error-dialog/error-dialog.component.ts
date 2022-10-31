import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamificationCallbacksService } from '../../../services/gamification-callbacks.service';
import { ErrorData } from '../../interfaces/atoms/error';

@Component({
  selector: 'sn-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css'],
})
export class ErrorDialogComponent implements OnDestroy {

  /**
   * error data to show
   */
  errorData: ErrorData = {
    title: 'Lo sentimos.',
    message: 'No podemos atender tu solicitud, por favor inténtalo más tarde.',
    icon: 'cloud-error',
    button: false,
    redirect: '/',
  };

  /**
   * subscription activated route
   */
  subs$!: Subscription;

  constructor(
    private callback: GamificationCallbacksService,
    private activeRoute: ActivatedRoute
  ) {
    this.subs$ = this.activeRoute.params.subscribe(({ error }) => {
      if (error === '2') {
        this.errorData.title = 'Tu tarjeta está bloqueda';
      }
    });
  }

  /**
   * callback to close
   */
  close() {
    this.callback.close();
  }

  /**
   * Lifecycle
   */
  ngOnDestroy(): void {
    if (this.subs$) {
      this.subs$.unsubscribe();
    }
  }
}
