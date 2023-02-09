import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, throwError } from 'rxjs';
import { TokenSsoFacade } from 'src/app/services/facades/sso.facade';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements AfterViewInit {
  constructor(private tokenFacade: TokenSsoFacade, private router: Router) {}

  ngAfterViewInit(): void {
    if (!this.tokenFacade._token) {
      const responseToken = this.tokenFacade.validationToken();

      const validationToken = async () => {
        await firstValueFrom(responseToken)
          .then(() => {
            this.router.navigateByUrl('challenge-like-u');
          })
          .catch((err) => {
            return throwError(() => err);
          });
      };
      validationToken();
    }
  }
}
