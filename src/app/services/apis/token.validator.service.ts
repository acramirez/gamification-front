import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenValidator } from '../../shared/interfaces/response/opaqueToken.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenValidatorService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Function request /session
   * @param tkn opaque token
   * @returns response session
   */
  getValidateToken(tkn: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: tkn,
    });

    const url = environment.session;

    return this.httpClient.post<any>(url, null, { headers });
  }
}
