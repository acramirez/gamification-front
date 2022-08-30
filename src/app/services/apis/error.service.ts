import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router: Router) {}

  showError = false;

  /**
   *
   * @param error Observable definition error
   * @param errorId route param id (1: generic error, 2: card error)
   */
  errorShow(error: Observable<never>, errorId = '1') {
    this.showError = true;
    if (error && this.showError === true) {
      this.router.navigate(['error', errorId]);
      this.showError = false;
    }
  }
}
